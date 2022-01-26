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
`;
