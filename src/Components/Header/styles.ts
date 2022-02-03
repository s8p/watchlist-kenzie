import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white);
  background-color: var(--darkGray);
  border-radius: 15px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  span {
    color: var(--yellow);
  }
  svg {
    font-size: 60px;
  }
  @media (min-width: 600px) {
    .mobile_menu {
      display: none;
    }
  }
  .logo {
    display: none;
    @media (min-width: 600px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
    }
    .user_data {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      padding-left: 10px;
      font-family: "Bungee", cursive;
    }
    svg {
      font-size: 60px;
    }
  }
  .nav_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px 10px 10px;
    .nav_desktop {
      display: none;
      @media (min-width: 600px) {
        display: flex;
        justify-content: space-between;
        padding-right: 30px;
      }

      a {
        color: white;
        text-decoration: none;
        padding-right: 20px;
        font-weight: bold;

        :hover {
          color: var(--yellow);
          transform: scale(1.1);
        }
      }
    }
    .logo_mobile {
      img {
        width: 60px;
      }
    }
  }
  .active {
    color: var(--yellow);
  }
`;

export const HighlightSpan = styled.span`
  margin-top: 6px;
  color: var(--yellow);

  :hover {
    text-decoration: underline;
    color: var(--white);
    cursor: pointer;
  }
`;
