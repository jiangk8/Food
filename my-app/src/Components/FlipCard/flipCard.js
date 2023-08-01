import { useState } from "react";
import cn from "classnames";
import {} from "./styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);
  let ingredients = card.ingredients.join("\r\n");
  let notes = card.notes;

  function handleClick() {
    setShowBack(!showBack);
  }

  console.log(notes);

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
          <div className='card-body d-flex flex-column justify-content-left '>
            <p className='card-text fs-4 '>{ingredients}</p>
            <p className='card-text fs-5 '>{notes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
