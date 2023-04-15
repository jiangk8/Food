import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  grid-auto-rows: auto;
  justify-items: center;
`;

export const Button = styled.button``;
