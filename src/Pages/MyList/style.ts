import styled from "@emotion/styled";
import Background from "../../Assets/background.jpeg";

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
  /* background: pink; */
  min-width: 320px;
  /* width: 820px; */
  max-width: 1600px;
  margin-top: 30px;
  color: white;

  > header {
    text-align: center;
    background: red;
    width: 100%;
    height: 50px;
  }
`;

export const ButtonBar = styled.div`
  display: none;
  margin: 2rem 0;
  align-content: center;
  width: 100%;
  justify-content: center;
  button {
    background-color: var(--yellow);
    color: var(--black);
    border: 2px solid var(--yellow);
    padding: 1px 3em;
    font-weight: 700;
    &:hover {
      border-color: var(--black);
    }
  }
  button + button {
    margin-left: 2rem;
  }
  @media (min-width: 600px) {
    display: flex;
  }
`;

export const List = styled.div`
  margin: 0 auto;
  width: 80%;
`;
