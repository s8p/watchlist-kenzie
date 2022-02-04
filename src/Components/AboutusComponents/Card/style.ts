import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  flex: 1;
  min-width: 250px;
  min-height: 300px;
  margin-bottom: 20px;
  color: var(--yellow);
  > header {
    padding: 20px;
    font-family: "Bungee", cursive;
    display: flex;
    justify-content: space-between;

    > div {
      margin-right: 8px;
      a + a {
        padding-left: 8px;
      }
    }
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: start;
  flex-direction: column;
  padding: 10px;
  padding-top: 0px;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 16px;

  > img {
    width: 100px;
    border-radius: 15px;
  }
  .list {
    list-style-type: circle;
    margin-left: 20px;
    font-family: "Work Sans", sans-serif;
    color: var(--white);
    font-size: 0.9rem;
  }
`;
