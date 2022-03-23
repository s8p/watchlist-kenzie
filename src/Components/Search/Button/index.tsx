import { Container } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import { ButtonHTMLAttributes } from "react";

interface ButtonSearchProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonSearch = ({ ...rest }: ButtonSearchProps) => {
  return (
    <Container {...rest}>
      <SearchIcon />
    </Container>
  );
};

export default ButtonSearch;
