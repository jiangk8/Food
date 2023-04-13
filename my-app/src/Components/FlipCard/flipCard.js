import { useState } from "react";
import cn from "classnames";
import {} from "./styled-components";

function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    setShowBack(!showBack);
  }

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
          <div className='card-body d-flex justify-content-center align-items-center'>
            <p className='card-text fs-1 fw-bold'></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
