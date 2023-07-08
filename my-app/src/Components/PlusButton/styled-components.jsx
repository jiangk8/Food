import styled from "styled-components";
import Popup from "reactjs-popup";

export const StyledButton = styled.button`
  background-color: white;
  border-radius: 4px;
  &:hover {
    background-color: #2f4f4f;
    border: 2px solid #2f4f4f;
    color: #fffff0;
  }
  &:active {
    transform: translateY(1px);
  }
`;

export const StyledPopup = styled(Popup)`
  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }

  &-content {
    margin: auto;
    background: rgb(255, 255, 255);
    width: 50%;
    padding: 5px;
  }
`;
