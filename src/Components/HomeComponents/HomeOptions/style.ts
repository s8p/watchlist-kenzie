import styled from "@emotion/styled";

export const Container = styled.div`
  width: 300px;
  height: 350px;
  background: #373737;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 40px;
  z-index: 2;
  opacity: 0.97;
  a {
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.02em;
    color: #f7d633;
  }

  h1 {
    font-family: Bungee;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 22px;
    color: #f7d633;
    padding: 20px 0px;
    text-align: center;
    box-sizing: border-box;
    padding: 0px 10px;
  }
  .buttons_container {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  @media (min-width: 1200px) {
    position: absolute;
    right: 0;
    width: 50vw;
    height: 100vh;
    border-radius: 0px;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.586053) -4%,
      rgba(0, 0, 0, 0) 0.02%,
      rgba(0, 0, 0, 0.586053) 0.03%,
      #000000 10.99%
    );
    h1 {
      font-size: 50px;
      line-height: 50px;
      width: 525px;
      height: 300px;
    }
    .buttons_container {
      width: 70%;
    }
  }
`;
