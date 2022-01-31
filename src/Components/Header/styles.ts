import styled from "@emotion/styled";

export const Container = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white);
  background-color: var(--black);
  div {
    margin: 1rem;
  }
  .navPC {
    display: none;
    button {
      color: var(--white);
      border-radius: 0;
      height: 55px;
      &:hover {
        text-decoration: underline;
      }
    }
    @media (min-width: 600px) {
      display: block;
    }
  }
  .navMobile {
    display: block;
    @media (min-width: 600px) {
      display: none;
    }
  }
`;
