import React, { useRef, useState } from "react";
import cn from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import EditRecipe from "../Edit/EditRecipe";
import { FormThemeProvider } from "react-form-component";

function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);

  let ingredients = card.ingredients.join("\r\n");
  let notes = card.notes;

  function handleClick() {
    setShowBack(!showBack);
  }

  return (
    <div className='flip-card-outer'>
      <div
        className={cn("flip-card-inner", {
          showBack,
        })}
      >
        <div className='card front' onClick={handleClick}>
          <div className='card-body d-flex justify-content-center align-items-center'>
            <p className='card-text fs-1 fw-bold'>{card.title}</p>
          </div>
        </div>
        <div className='card back'>
          <FormThemeProvider>
            <EditRecipe recipeId={card.id} />
          </FormThemeProvider>
          <div
            className='card-body d-flex flex-column justify-content-left '
            onClick={handleClick}
          >
            <p className='card-text fs-4 '>{ingredients}</p>
            <p className='card-text fs-5 '>{notes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
