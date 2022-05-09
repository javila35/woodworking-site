import { Nav as StyledNav } from "./Nav.styles";
import { Link } from "react-router-dom";

const styledLink = {
  color: "black",
};

export const Nav = () => {
  return (
    <StyledNav>
      <Link to={"/contact"} style={styledLink}>
        Contact
      </Link>
      <Link to={"/pictures"} style={styledLink}>
        Pictures
      </Link>
    </StyledNav>
  );
};
