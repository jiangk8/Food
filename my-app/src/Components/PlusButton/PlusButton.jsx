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
import AddPost from "../AddPost/AddPost";

function PlusButton() {
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
            <AddPost></AddPost>
          </StyledContent>
        </StyledModal>
      )}
    </StyledPopup>
  );
}

export default PlusButton;
