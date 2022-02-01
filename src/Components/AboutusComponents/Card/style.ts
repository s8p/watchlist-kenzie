import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: purple;
  flex: 1;
  max-width: 40%;
  min-width: 250px;
  max-width: 300px;
  height: 250px;
  margin-bottom: 20px;
  > header {
    padding: 20px;
    width: 40%;
  }
  > footer {
    padding: 20px;
    width: 40%;
    display: flex;
    justify-content: space-around;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  > img {
    max-width: 100px;
    min-width: 80px;
  }
`;
