import styled from "@emotion/styled";

export const Container = styled.div`
  background: orange;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const DashboardBox = styled.div`
  width: 90vw;
  color: white;
  text-align: center;
  height: 900px;
  background: var(--gray);
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  height: 100%;

  justify-content: space-evenly;

  > header {
    background: red;
    width: 100%;
    height: 50px;
  }

  > div {
    background: blue;
    width: 100%;
    height: 250px;
  }

  > section {
    background: pink;
    color: black;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const TopRatedBox = styled.div`
  background: var(--darkGray);
  height: 200px;
`;

export const PopularBox = styled.div`
  background: var(--darkGray);
  height: 380px;
  display: flex;
  overflow-x: scroll;
  gap: 10px;
  align-items: center;
`;
