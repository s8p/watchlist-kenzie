import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  margin: 20px auto;
  display: flex;
  img {
    width: 200px;
    height: 300px;
  }

  .extra {
    padding-left: 4em;
    padding-right: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .buttonBar {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      button {
        background-color: var(--yellow);
        color: var(--black);
        border: 2px solid var(--yellow);
        padding-top: 1px;
        padding-bottom: 1px;
        font-weight: 700;
        &:hover {
          border-color: var(--black);
          background-color: var(--white);
        }
      }
      button + button {
        margin-top: 10px;
        @media (min-width: 768px) {
          margin-top: 0;
        }
      }
      @media (min-width: 768px) {
        flex-direction: row;
      }
    }
  }
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;
