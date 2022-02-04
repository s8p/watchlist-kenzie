import styled from "@emotion/styled";

export const ButtonContainer = styled.div`
  background: var(--yellow);
  padding: 2px;
  border-radius: 8px;
  border: 0;
  padding: 3px;

  transition: 0.2s;

  :hover,
  :focus {
    transform: scale(1.05);
  }
  :hover {
    transform: translateY(-2px) scale(1.05);
  }
  :active {
    transform: translateY(2px);
  }
`;

export const ButtonBox = styled.button`
  /* background: var(--yellow);
  color: var(--black);
  padding: 4px;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid var(--black);
  cursor: pointer;
  */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  padding: 0.5em;
  cursor: pointer;
  background: var(--yellow);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  transition: transform 100ms ease-in;

  border: 2px solid var(--black);

  font-weight: 600;

  :hover {
    transform: translateY(-2px) scale(1.05);
  }
  :active {
    transform: translateY(2px);
  }

  /* :hover {
    transform: translateY(-2px) scale(1.05);
  }
  :active {
    transform: translateY(2px);
  } */
`;
