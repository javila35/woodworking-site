import { Logo, LogoContainer, MainContainer } from "./Layout.styles";
import { Nav } from "../components";

type LayoutProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <MainContainer>
      <LogoContainer>
        <Logo
          src="https://res.cloudinary.com/deijyaaid/image/upload/v1651079413/Blue%20Tree%20Wood%20Works/Logo/BLUE_TREE_WOOD_WORKS_FF-01_nn4rd1.png"
          alt="Blue Tree Wood Works Logo"
        />
      </LogoContainer>
      <Nav />
      {children}
    </MainContainer>
  );
};
