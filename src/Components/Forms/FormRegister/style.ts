import styled from "@emotion/styled";

export const Container = styled.div`
  width: 300px;
  height: 550px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 700px) {
    width: 500px;
  }
`;

export const SmallContainer = styled.div`
  width: 300px;
  height: 450px;
  background: #373737;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 40px;
  h1 {
    font-family: Bungee;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 22px;
    color: #f7d633;
    padding: 20px 0px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 300px;
  }
  .links_login {
    width: 300px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    p {
      font-family: Work Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 15px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: -0.02em;
      color: #ffffff;
      a {
        padding-left: 5px;
      }
    }
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
  }
  @media (min-width: 700px) {
    width: 500px;
    border-radius: 0px 0px 30px 30px;
  }
`;
