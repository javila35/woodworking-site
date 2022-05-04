import { Nav as StyledNav } from "./Nav.styles";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <StyledNav>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/pictures"}>Pictures</Link>
    </StyledNav>
  );
};
