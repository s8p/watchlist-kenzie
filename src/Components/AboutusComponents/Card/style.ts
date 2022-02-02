import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const rotateAnimation = keyframes`
 0% {
  transform: rotateY(0deg);
} 
50% {
  transform: rotateY(180deg);
}
100% {
  transform: rotateY(360deg);
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  flex: 1;
  max-width: 40%;
  min-width: 250px;
  max-width: 300px;
  height: 250px;
  margin-bottom: 20px;
  color: var(--yellow);
  > header {
    padding: 20px;
    font-family: "Bungee", cursive;
    display: flex;
    justify-content: space-between;
  }
  > footer {
    padding: 20px;
    width: 40%;
    display: flex;
    justify-content: space-around;
  }
  :hover {
    animation: ${rotateAnimation} 1s linear;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: start;
  padding: 20px;
  padding-top: 0px;
  justify-content: space-between;
  > img {
    width: 100px;
    border-radius: 15px;
  }
  .list {
    list-style-type: circle;
    margin-left: 20px;
    font-family: "Work Sans", sans-serif;
    color: var(--white);
  }
`;
