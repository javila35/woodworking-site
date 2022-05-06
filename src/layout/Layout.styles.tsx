import styled from "styled-components";

// grid-template-rows: repeat(10, 1fr);
export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 23px;
  justify-items: center;
`;

export const LogoContainer = styled.div`
  grid-area: 1 / 4 / 3 / 6;
`;

export const Logo = styled.img`
  max-width: 30vw;
  max-height: 15vh;
`;
