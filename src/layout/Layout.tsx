import { MainContainer } from "./Layout.styles";
import { Nav } from "../components";

export const Layout = ({ children }) => {
  return (
    <MainContainer>
      <Nav />
      {...children}
    </MainContainer>
  );
};
