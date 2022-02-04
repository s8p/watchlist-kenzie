import styled from "@emotion/styled";

export const Container = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  z-index: 0;
  overflow: hidden;
  position: relative;

  #poster {
    @media (min-width: 1000px) {
      display: none;
    }
  }

  #banner {
    display: none;
    @media (min-width: 1000px) {
      display: initial;
      border-radius: 8px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      /* border: 4px solid var(--gray);
      border-right: 0; */
    }
  }

  > div {
    background: rgb(2, 1, 23);
    background: -moz-linear-gradient(
      90deg,
      rgba(2, 1, 23, 1) 40%,
      rgba(85, 85, 84, 1) 10%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(2, 1, 23, 1) 40%,
      rgba(85, 85, 84, 1)
    );
    background: linear-gradient(
      0deg,
      rgba(2, 1, 23, 0.5) 40%,
      rgba(85, 85, 84, 0.9) 100%
    );

    border-radius: 8px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: flex-end;

    > section {
      padding: 25px;

      /* border-left: 4px solid var(--yellow); */

      border-radius: 8px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border: 4px solid var(--yellow);
      /* border-left: 0; */

      @media (max-width: 450px) {
        display: none;
      }

      height: 100%;

      > h1 {
        font-size: 2rem;
        font-family: "bungee", cursive;
        color: var(--yellow);

        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #000;

        text-shadow: -2px 2px 0px rgba(150, 150, 150, 1);
      }

      > p {
        margin-top: 20px;
        max-height: 140px;
        overflow-y: scroll;
        font-size: 1.5rem;

        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background-color: transparent;
          border-radius: 100px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: var(--gray);
          border-radius: 100px;
        }
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
        font-size: 1.3rem;

        @media (max-width: 450px) {
          display: none;
        }
      }
    }
  }
`;
