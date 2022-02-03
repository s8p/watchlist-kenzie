import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 20px 10px;

  background: orange;

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
    rgba(2, 1, 23, 1) 40%,
    rgba(85, 85, 84, 0.9) 100%
  );

  border: 4px solid var(--darkGray);
  border-radius: 15px;

  width: 80vw;
  height: 600px;
  max-width: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 600px) {
    height: 700px;
  }

  > section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h3 {
      display: none;
      margin-bottom: 16px;

      font-family: "bungee", cursive;
      color: var(--yellow);

      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #000;

      text-shadow: -2px 2px 0px rgba(150, 150, 150, 1);

      @media (min-width: 600px) {
        display: block;
      }

      text-align: center;
      font-size: 3rem;
    }
    .backdrop {
      max-width: 90%;
      max-height: 40vh;
      margin: 0 auto;
      display: none;
      @media (min-width: 600px) {
        display: block;
      }
    }
    .poster {
      max-height: 40vh;
      max-width: 90%;
      margin: 0 auto;
      display: block;
      @media (min-width: 600px) {
        display: none;
      }
    }
  }
`;

export const PosterBox = styled.section``;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 600px) {
    justify-content: space-between;
  }

  > section {
    /* background: var(--gray); */
    color: var(--white);
    padding: 8px 4px;
    max-height: 100px;
    overflow-y: scroll;
    border-radius: 8px;
    font-size: 1.6rem;
    margin: 0 1.5rem;

    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 100px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--white);
      border-radius: 100px;
    }

  
  }

    @media (min-width: 600px) {
      max-height: 200px;
    }
    
    > div {
      font-size: 1.5rem;
      color: var(--white);
      height: 90px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      p{
        display: flex;
        align-items: center;
        
        #rating{
          width: 40px;
        }

        #popularity{
          transform: rotate(220deg);
          color: green;
        }
      }
    }
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    @media (min-width: 600px) {
      width: 200px;
    }
  }
`;
