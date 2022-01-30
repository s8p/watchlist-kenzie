import styled from "@emotion/styled";

export const Container = styled.div`
  /* background: blue; */
  /* width: 100%; */
  height: 300px;
  display: flex;
  justify-content: center;

  > img {
    z-index: 0;
  }

  > div {
    width: 533px;
    height: 300px;
    background: pink;
    font-size: 2rem;
  }
`;
