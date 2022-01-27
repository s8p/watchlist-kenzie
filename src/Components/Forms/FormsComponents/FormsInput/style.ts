import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  input {
    padding: 0px 10px 0px 20px;
    width: 280px;
    height: 50px;
    background: #ffffff;
    border: 2px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 8px;
    @media (min-width: 700px) {
      width: 400px;
    }
  }
`;

export const Error = styled.span``;
