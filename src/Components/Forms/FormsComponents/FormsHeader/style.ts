import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: transparent;
  padding: 25px 0px;
  border-radius: 30px 30px 0px 0px;
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    transform: scale(0.8);
  }
  @media (min-width: 700px) {
    background: white;
  }
`;
