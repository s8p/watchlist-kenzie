import styled from "@emotion/styled";
import Background from "../../Assets/background.jpeg";

export const Container = styled.div`
  /* background: orange; */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${Background});
  background-size: 80%;

  .opacity_container {
    position: absolute;
    width: 100vw;
    height: 100%;
    /* background: green; */
    /* opacity: 0.6; */
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.586053) 0.01%,
      rgba(0, 0, 0, 0) 0.02%,
      rgba(0, 0, 0, 0.586053) 0.03%,
      #000000 99.99%
    );
  }
`;

export const DashboardBox = styled.div`
  width: 90vw;
  color: white;
  text-align: center;
  /* height: 900px; */
  /* background: var(--gray); */
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 40px;

  justify-content: space-evenly;

  > header {
    background: red;
    width: 100%;
    height: 50px;
  }

  > section {
    z-index: 0;
    /* background: pink; */
    color: black;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
