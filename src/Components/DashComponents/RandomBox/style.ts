import styled from "@emotion/styled";

export const Container = styled.div`
  /* background: blue; */
  /* width: 100%; */
  height: 300px;
  display: flex;
  justify-content: center;
  z-index: 0;
  overflow: hidden;
  position: relative;
  /* flex-direction: column; */

  #poster {
    @media (min-width: 1000px) {
      display: none;
    }
  }

  #banner {
    @media (max-width: 1000px) {
      display: none;
    }
  }

  > div {
    /* width: 533px; */
    /* height: 300px; */
    /* background: var(--darkGray); */
    background: rgb(2, 0, 36);
    background: linear-gradient(
      180deg,
      rgba(2, 0, 36, 1) 6%,
      var(--darkGray) 100%
    );
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: flex-end;

    > section {
      @media (max-width: 450px) {
        display: none;
      }

      height: 100%;

      > h1 {
        font-size: 2rem;
      }

      > p {
        margin-top: 20px;
        font-size: 1.5rem;
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      height: 20%;
      width: 100%;
      position: absolute;
      padding-bottom: 10px;
      background: linear-gradient(
        to bottom,
        rgba(255, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 80%
      );

      > button {
        color: white;
        font-size: 1.3rem;
        background: orange;
        width: 100px;
        height: 30px;

        @media (max-width: 450px) {
          display: none;
        }
      }
    }
  }
`;
