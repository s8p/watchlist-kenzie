import styled from "@emotion/styled";
import Background from "../../Assets/background.jpeg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-size: 80%;
  background-color: rgba(10, 23, 55, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .opacity_container {
    position: absolute;
    width: 100vw;
    height: 100vh;
    opacity: 0.6;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.586053) 0.01%,
      rgba(0, 0, 0, 0) 0.02%,
      rgba(0, 0, 0, 0.586053) 0.03%,
      #000000 99.99%
    );
  }
`;
export const MainBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 70px);
  margin-left: 115px;
  margin-right: 115px;
  > header {
    font-size: 40px;
    width: 100%;
    height: 130px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: left;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  margin-top: 33px;
  padding: 20px;
  padding-left: 80px;
  padding-right: 80px;
  color: var(--yellow);
  border-radius: 15px;
  > header {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    > h3 {
      margin: 40px 0px;
      font-size: 40px;
      font-family: "Bungee", cursive;
    }
  }
  > p {
    color: var(--white);
    font-size: 24px;
    font-family: "Work Sans", sans-serif;
    margin-bottom: 40px;
    > span {
      font-family: "Bungee", cursive;
      color: var(--yellow);
    }
  }
`;

export const CardContainer = styled.div`
  margin-top: 33px;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex: 1;
  overflow: auto;
  overflow-x: hidden; /* Hide horizontal scrollbar */
`;
