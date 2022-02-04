import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 300px;
  position: relative;
  padding: 10px;
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
    padding: 10px;

    border-radius: 8px;
    border: 4px solid var(--yellow);
  }

  /* border-radius: 8px;
  border: 2px solid var(--darkGray); */

  h1 {
    font-size: 30px;
    color: var(--yellow);
    position: relative;
    text-align: center;
    border-radius: 20px;

    font-family: "bungee", cursive;
    color: var(--yellow);

    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000;
  }
`;
