import { Link as RouterLink } from "react-router-dom";

type LinkProps = {
  route: string;
  label: string;
};

const styledLink = {
  color: "black",
};

export const Link: React.FC<LinkProps> = ({ route, label }) => {
  return (
    <RouterLink to={route} style={styledLink}>
      {label}
    </RouterLink>
  );
};
