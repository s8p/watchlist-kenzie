import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  /* max-width: 1690px; */
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
        width: 200px;
        padding-right: 30px;
      }

      a {
        color: white;
        text-decoration: none;
      }
    }
    .logo_mobile {
      img {
        width: 60px;
      }
    }
  }
`;
