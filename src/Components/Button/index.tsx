import { ButtonHTMLAttributes, ReactNode, MutableRefObject } from "react";

import { ButtonContainer, ButtonBox } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <ButtonContainer>
      <ButtonBox {...rest}>{children}</ButtonBox>
    </ButtonContainer>
  );
};

export default Button;
