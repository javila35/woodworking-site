import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 23px;
  justify-items: center;
  background-color: #9c6a6e;
  width: 100vw;
  height: 100vh;
`;

export const LogoContainer = styled.div`
  grid-area: 1 / 4 / 3 / 6;
`;

export const Logo = styled.img`
  max-width: 60vw;
  max-height: 40vh;
`;

export const ChildrenContainer = styled.div`
  grid-area: 3 / 2 / 7 / 8;
  width: 80vw;
`;
