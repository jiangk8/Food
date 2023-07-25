import { useState } from "react";
import cn from "classnames";
import {} from "./styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    setShowBack(!showBack);
  }

  let ingredients = card.ingredients.join("\r\n");
  console.log(ingredients);

  return (
    <div className='flip-card-outer' onClick={handleClick}>
      <div
        className={cn("flip-card-inner", {
          showBack,
        })}
      >
        <div className='card front'>
          <div className='card-body d-flex justify-content-center align-items-center'>
            <p className='card-text fs-1 fw-bold'>{card.title}</p>
          </div>
        </div>
        <div className='card back'>
          <div className='card-body d-flex justify-content-left '>
            <p className='card-text fs-4 '>{ingredients}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
