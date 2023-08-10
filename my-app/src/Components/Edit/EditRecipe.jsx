import React, { useRef, useState } from "react";

import {
  StyledButton,
  StyledPopup,
  StyledModal,
  StyledHeader,
  StyledContent,
} from "./styled-components";
import FormPost from "../FormPost/FormPost";

function EditRecipe(props) {
  return (
    <StyledPopup trigger={<StyledButton> Edit </StyledButton>} modal nested>
      {(close) => (
        <StyledModal>
          <StyledHeader> Edit Recipe </StyledHeader>
          <StyledContent>
            <FormPost closeForm={close} edit={true} recipeId={props.recipeId} />
          </StyledContent>
        </StyledModal>
      )}
    </StyledPopup>
  );
}

export default EditRecipe;
