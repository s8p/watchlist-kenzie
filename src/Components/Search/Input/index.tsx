import { InputHTMLAttributes } from "react";
import { Container } from "./style";

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputSearch = ({ ...rest }: InputSearchProps) => {
  return <Container placeholder="Search for series..." {...rest}></Container>;
};

export default InputSearch;
