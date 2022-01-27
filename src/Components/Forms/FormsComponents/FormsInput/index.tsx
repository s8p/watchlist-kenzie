import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { Container, Error } from "./style";

interface FormsInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage: string | undefined;
}

const FormsInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  FormsInputProps
> = ({ errorMessage, ...rest }, ref) => {
  return (
    <Container>
      <input {...rest} ref={ref} />
      {errorMessage && <Error>{errorMessage}</Error>}
    </Container>
  );
};

export const FormsInput = forwardRef(FormsInputBase);
