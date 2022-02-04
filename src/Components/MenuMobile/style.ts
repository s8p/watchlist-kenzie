import styled from "@emotion/styled";

export const Container = styled.div`
  z-index: 1;
  position: fixed;
  top: 4px;
  display: flex;
  flex-direction: column;
  right: 0;
  display: flex;
  height: 300px;
  width: 200px;
  background: transparent;

  .opacity_container {
    border-radius: 20px;
    width: 100%;
    height: 100%;
    position: absolute;
    background: black;
    opacity: 0.9;
  }
  .header_container {
    display: flex;
    justify-content: space-between;
    svg {
      color: white;
      position: relative;
      padding: 10px 0px 0px 10px;
    }
    .user_data {
      position: relative;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      padding: 14px 14px 14px 0px;
      .icon {
        svg {
          color: white;
          font-size: 44px;
          margin-right: 8px;
        }
      }
      .data {
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          font-family: Bungee;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          color: white;
        }
        span {
          font-family: Bungee;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          color: white;
        }
      }
    }
  }
  .links {
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-around;
    align-items: end;
    height: 200px;
    padding-right: 10px;
    a {
      font-family: Bungee;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      color: #f7d633;
      text-decoration: none;
    }
    span {
      font-family: Bungee;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      color: #f7d633;
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
