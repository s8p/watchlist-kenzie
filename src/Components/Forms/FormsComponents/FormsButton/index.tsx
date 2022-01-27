import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./style";

interface FormsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const FormsButton = ({ children, ...rest }: FormsButtonProps) => {
  return <Container {...rest}>{children}</Container>;
};

export default FormsButton;
