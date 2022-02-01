import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  margin: 20px auto;
  display: flex;
  padding-right: 7em;
  padding-left: 0em;

  &:nth-child(even) {
    flex-direction: row-reverse;
    padding-left: 7em;
    padding-right: 0em;

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
        border-top-right-radius: 80px;
        border-top-left-radius: 0px;
      }
    }
  }

  section {
    position: relative;
    z-index: 1;
    display: flex;

    width: 1100px;

    .opacity_container {
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
      border-top-left-radius: 80px;
    }

    .extra {
      padding-left: 2em;
      padding-right: 2em;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      align-items: center;

      .text {
        /* background: orange; */
        width: 500px;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;

        h3 {
          font-size: 3rem;
        }
        p {
          /* margin-top: 16px; */
          font-size: 2rem;
        }
      }

      .buttonBar {
        height: 40%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        /* background: blue; */
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
