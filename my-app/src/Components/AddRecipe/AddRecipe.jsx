import React, { useRef, useState } from "react";

import {
  StyledButton,
  StyledPopup,
  StyledModal,
  StyledHeader,
  StyledContent,
} from "./styled-components";
import FormPost from "../FormPost/FormPost";

function AddRecipe(props) {
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
            <FormPost closeForm={close} />
          </StyledContent>
        </StyledModal>
      )}
    </StyledPopup>
  );
}

export default AddRecipe;
