import styled from "styled-components";
import Popup from "reactjs-popup";

export const StyledButton = styled.button`
  width: 50px;
  margin-left: auto;
  margin-right: 0;
  border: 0;
  background-color: transparent;
  &:hover {
    color: #fffff0;
  }
`;

export const StyledPopup = styled(Popup)`
  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }

  &-content {
    border-radius: 5px;
    margin: auto;
    background: rgb(255, 255, 255);
    width: 50%;
    padding: 5px;
  }
`;

export const StyledModal = styled.div`
  font-size: 12px;
`;

export const StyledHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  font-size: 18px;
  text-align: center;
  padding: 5px;
`;

export const StyledContent = styled.div`
  width: 100%;
  padding: 10px 5px;
`;

export const StyledAction = styled.div`
  width: 100%;
  padding: 10px 5px;
  margin: auto;
  text-align: center;
`;

export const StyledClose = styled.button`
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: -10px;
  top: -10px;
  font-size: 24px;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #cfcece;
`;
