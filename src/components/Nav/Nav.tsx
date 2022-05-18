import { Nav as StyledNav } from "./Nav.styles";
import { Link } from "../Link";

export const Nav = () => {
  return (
    <StyledNav>
      <Link route="/" label="Home" />
      <Link route="/contact" label="Contact" />
      <Link route="/pictures" label="Pictures" />
    </StyledNav>
  );
};
