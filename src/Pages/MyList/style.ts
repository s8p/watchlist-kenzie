import styled from "@emotion/styled";
import Background from "../../Assets/background.jpeg";
import { css } from "@emotion/react";

interface ListProps {
  display: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: url(${Background});
  background-size: 80%;
  position: relative;

  .opacity_container {
    position: fixed;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.586053) 80%,
      rgba(0, 0, 0, 0) 0.02%,
      rgba(0, 0, 0, 0.586053) 40%,
      #000000 100%
    );
  }
`;

export const MyListBox = styled.div`
  z-index: 1;
  width: 100%;
  min-width: 320px;
  max-width: 1600px;
  margin-top: 30px;
  .search_container {
    padding: 20px;
  }
`;

export const ButtonBar = styled.div`
  display: flex;
  margin: 2rem 0;
  width: 100%;
  justify-content: center;
  gap: 16px;

  button {
    width: 100px;
    @media (min-width: 500px) {
      width: 200px;
    }
  }
`;

export const List = styled.div<ListProps>`
  margin: 0 auto;
  width: 80%;
  ${(props) =>
    props.display &&
    css`
      display: flex;
      justify-content: center;
    `}
`;
