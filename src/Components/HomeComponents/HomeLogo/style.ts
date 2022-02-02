import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  padding: 25px;
  z-index: 2;
  @media (min-width: 1200px) {
    width: 50vw;
    height: 100vh;
    position: absolute;
    left: 0;
    padding: 0px;
    .image_container {
      transform: scale(1.5);
      img {
        width: 360px;
      }
    }
  }
`;
