import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: white;
  width: 80vw;
  margin: 20px auto;
  h3 {
    text-align: center;
    font-size: 2rem;
  }
  .backdrop {
    max-width: 90%;
    max-height: 40vh;
    margin: 0 auto;
    display: none;
    @media (min-width: 600px) {
      display: block;
    }
  }
  .poster {
    max-height: 40vh;
    max-width: 90%;
    margin: 0 auto;
    display: block;
    @media (min-width: 600px) {
      display: none;
    }
  }
  .info {
    margin: 1em;
    display: flex;
    flex-direction: column;
    @media (min-width: 600px) {
      flex-direction: row;
    }
    .overview {
      background-color: var(--gray);
      padding: 0.5em;
      border-radius: 1em;
      @media (min-width: 600px) {
        margin-right: 1em;
      }
    }
  }
  .buttonBar {
    display: flex;
    justify-content: center;
    button {
      background-color: var(--yellow);
      color: var(--black);
      border: 2px solid var(--yellow);
      padding: 1px 3em;
      margin: 5px auto;
      font-weight: 700;
      &:hover {
        border-color: var(--black);
      }
    }
  }
`;
