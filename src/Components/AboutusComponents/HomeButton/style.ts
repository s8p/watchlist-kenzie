import styled from "@emotion/styled";

export const Container = styled.button`
  width: 120px;
  height: 40px;
  background: #f7d633;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.46px;
  text-transform: uppercase;
  color: #000000;
  align-self: flex-end;
  margin: 2px;
  @media (min-width: 1200px) {
    width: 150px;
    height: 50px;
    font-size: 24px;
  }
`;
