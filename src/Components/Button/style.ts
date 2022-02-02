import styled from "@emotion/styled";

export const ButtonContainer = styled.section`
  background: var(--yellow);
  padding: 2px;
  border-radius: 8px;
  border: 0;

  transition: 0.2s;

  :hover,
  :focus {
    transform: scale(1.05);
  }
`;

export const ButtonBox = styled.button`
  background: var(--yellow);
  color: var(--black);
  padding: 4px;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid var(--black);
  cursor: pointer;
`;
