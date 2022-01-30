import styled from "@emotion/styled";
import Background from "../../Assets/background.jpeg";

export const Container = styled.div`
  background: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DashboardBox = styled.div`
  width: 90vw;
  color: white;
  text-align: center;
  /* height: 900px; */
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

  > section {
    background: pink;
    color: black;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
