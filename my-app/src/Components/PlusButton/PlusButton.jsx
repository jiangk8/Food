import React from "react";
import { StyledButton, StyledPopup } from "./styled-components";

function PlusButton() {
  return (
    <StyledPopup trigger={<StyledButton>Add Recipe</StyledButton>} modal>
      <div>Popup content here !!</div>
    </StyledPopup>
  );
}

export default PlusButton;
