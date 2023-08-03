import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0px 40px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  grid-auto-rows: auto;
  justify-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6vh 0vh 3vh;
`;
