import styled from "@emotion/styled";
import Background from "../../Assets/background.jpeg";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;

  background-image: url(${Background});
  background-size: 80%;

  .opacity_container {
    position: absolute;
    width: 100%;
    height: 100%;

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.586053) 0.01%,
      rgba(0, 0, 0, 0) 0.02%,
      rgba(0, 0, 0, 0.586053) 0.03%,
      #000000 80%
    );
  }
`;

export const DashboardBox = styled.div`
  width: 90vw;
  color: white;
  text-align: center;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 40px;

  justify-content: space-evenly;

  > header {
    width: 100%;
    position: relative;
    background: transparent;
  }

  > section {
    z-index: 0;
    color: black;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1 {
      font-size: 1.5rem;

      text-align: left;

      font-family: "bungee", cursive;
      color: var(--yellow);
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #000;
    }
  }
`;
