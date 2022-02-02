import styled from "@emotion/styled";

export const Container = styled.button`
  display: flex;
  width: 60px;
  height: 40px;
  background: #f7d633;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  border: none;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.46px;
  text-transform: uppercase;
  color: #000000;
  align-self: flex-end;
  margin: 2px;
  align-items: center;
  justify-content: center;
  z-index: 1;

  :hover {
    background: var(--grey);
    border: 3px solid var(--yellow);
    color: var(--yellow);
  }

  :active {
    transform: translateY(2px);
  }
  @media (min-width: 1200px) {
    width: 150px;
    height: 50px;
    font-size: 24px;
  }
`;
