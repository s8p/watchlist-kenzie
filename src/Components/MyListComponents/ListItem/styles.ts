import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  margin: 20px auto;
  display: flex;
  justify-content: center;

  .buttonBar {
    border-bottom-right-radius: 80px;
  }

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

      .buttonBar {
        border-bottom-right-radius: 0px;

        border-bottom-left-radius: 80px;
      }
    }
  }

  section {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    max-width: 1100px;
    max-height: 350px;

    @media (min-width: 1024px) {
      justify-content: flex-start;
      max-height: 300px;
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
      max-width: 250px;
      max-height: 350px;
      border-radius: 16px;

      @media (min-width: 500px) {
        border-radius: 0px;
        border-top-left-radius: 80px;
      }
    }

    .extra {
      @media (min-width: 500px) {
        display: flex;
      }

      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      align-items: center;

      .text {
        display: none;

        @media (min-width: 500px) {
          display: flex;
        }

        height: 100%;
        flex-wrap: wrap;
        text-align: center;

        h3 {
          width: 100%;
          font-size: 3rem;
        }
        p {
          padding: 0 4px 0 4px;
          font-size: 1.5rem;
          overflow-y: scroll;

          @media (max-width: 1024px) {
            height: 180px;
          }
        }
      }

      .buttonBar {
        display: flex;

        @media (max-width: 768px) {
          margin-bottom: 0;
          position: absolute;
          left: 0;
          bottom: 0;
          /* height: 100%; */
          width: 100%;
          /* align-items: flex-end; */

          /* background: linear-gradient(
            to bottom,
            rgba(255, 0, 0, 0) 10%,
            rgba(0, 0, 0, 1) 70%
          ); */
        }

        width: 100%;

        justify-content: space-evenly;
        flex-direction: column;
        margin-bottom: 8px;

        &:nth-child(even) {
          flex-direction: row-reverse;
        }

        button {
          box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px,
            rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
            rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

          margin-bottom: 8px;

          height: 30px;
          width: 100px;
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

          /* #details {
            background: orange;
          } */
        }
        /* button + button {
          margin-top: 10px;
          @media (min-width: 768px) {
            margin-top: 0;
          }
        } */
        @media (min-width: 768px) {
          flex-direction: row;
        }
      }
    }
  }
`;
