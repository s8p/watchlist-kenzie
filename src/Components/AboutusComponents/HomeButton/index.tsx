import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./style";

interface HomeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const HomeButton = ({ children, ...rest }: HomeButtonProps) => {
  return <Container {...rest}>{children}</Container>;
};

export default HomeButton;
