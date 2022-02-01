import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  margin: 20px auto;
  display: flex;

  &:nth-child(even) {
    flex-direction: row-reverse;

    section {
      flex-direction: row-reverse;

      .opacity_container {
        border-bottom-left-radius: 80px;
        border-top-right-radius: 80px;
        border-top-left-radius: 0px;

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
          270deg,
          rgba(2, 1, 23, 1) 40%,
          rgba(85, 85, 84, 0.5) 150%
        );
      }

      img {
        @media (min-width: 500px) {
          border-top-right-radius: 80px;
          border-top-left-radius: 0px;
        }
      }
    }
  }

  section {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    width: 1100px;

    @media (min-width: 768px) {
      justify-content: flex-start;
    }

    .opacity_container {
      display: none;

      @media (min-width: 500px) {
        display: initial;
      }

      border-bottom-right-radius: 80px;
      border-top-left-radius: 80px;

      z-index: -1;
      width: 100%;
      position: absolute;

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
        90deg,
        rgba(2, 1, 23, 1) 40%,
        rgba(85, 85, 84, 0.5) 150%
      );
    }

    img {
      width: 250px;
      height: 350px;
      border-radius: 16px;

      @media (min-width: 500px) {
        border-radius: 0px;
        border-top-left-radius: 80px;
      }
    }

    .extra {
      display: none;

      @media (min-width: 500px) {
        display: flex;
      }

      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      align-items: center;

      .text {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        text-align: center;

        h3 {
          width: 100%;
          font-size: 3rem;
        }
        p {
          height: 180px;
          font-size: 1.5rem;
          overflow: hidden;
          overflow-y: scroll;

          @media (min-width: 768px) {
            font-size: 1.7rem;
          }
        }
      }

      .buttonBar {
        display: none;
        @media (min-width: 768px) {
          display: flex;
        }

        height: 100px;
        width: 80%;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;

        &:nth-child(even) {
          flex-direction: row-reverse;
        }

        button {
          height: 50px;
          background-color: var(--yellow);
          color: var(--black);
          border: 2px solid var(--yellow);
          padding-top: 1px;
          padding-bottom: 1px;
          font-weight: 700;
          &:hover {
            border-color: var(--black);
            background-color: var(--white);
          }
        }
        button + button {
          margin-top: 10px;
          @media (min-width: 768px) {
            margin-top: 0;
          }
        }
        @media (min-width: 768px) {
          flex-direction: row;
        }
      }
    }
  }
`;
