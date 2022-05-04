import { MainContainer } from "./Layout.styles";
import { Nav } from "../components";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <MainContainer>
      <Nav />
      {children}
    </MainContainer>
  );
};
