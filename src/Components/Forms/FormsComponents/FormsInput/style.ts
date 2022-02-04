import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface ContainerProps {
  error: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  input {
    padding: 0px 10px 0px 20px;
    width: 280px;
    height: 50px;
    background: #ffffff;
    ${(props) =>
      props.error
        ? css`
            border: 2px solid red;
          `
        : css`
            border: 2px solid #e0e0e0;
          `}
    box-sizing: border-box;
    border-radius: 8px;
    @media (min-width: 700px) {
      width: 400px;
    }
  }
`;

export const Error = styled.span`
  color: red;
  padding-top: 5px;
  font-size: 14px;
`;
