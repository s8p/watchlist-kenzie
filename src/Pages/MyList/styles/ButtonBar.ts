import styled from "@emotion/styled";

export const ButtonBar = styled.div`
  display: none;
  margin: 2rem 0;
  align-content: center;
  width: 100%;
  justify-content: center;
  button {
    background-color: var(--yellow);
    color: var(--black);
    border: 2px solid var(--yellow);
    padding: 1px 3em;
    font-weight: 700;
    &:hover {
      border-color: var(--black);
    }
  }
  button + button {
    margin-left: 2rem;
  }
  @media (min-width: 600px) {
    display: flex;
  }
`;
