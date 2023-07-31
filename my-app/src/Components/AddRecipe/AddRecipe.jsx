import React, { useRef } from "react";
import Popup from "reactjs-popup";

import {
  StyledButton,
  StyledPopup,
  StyledModal,
  StyledHeader,
  StyledContent,
  StyledClose,
} from "./styled-components";
import FormPost from "../FormPost/FormPost";

function AddRecipe() {
  return (
    <StyledPopup
      trigger={<StyledButton> Add Recipe </StyledButton>}
      modal
      nested
    >
      {(close) => (
        <StyledModal>
          <StyledHeader> New Recipe </StyledHeader>
          <StyledContent>
            <FormPost></FormPost>
          </StyledContent>
        </StyledModal>
      )}
    </StyledPopup>
  );
}

export default AddRecipe;
