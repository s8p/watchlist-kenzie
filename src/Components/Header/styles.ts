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

  .mobile_menu {
    svg {
      font-size: 3rem;
    }
  }

  #avatar {
    width: 60px;
    border-radius: 100%;
  }
  @media (min-width: 768px) {
    .mobile_menu {
      display: none;
    }
  }
  .logo {
    display: none;
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
    }
    .user_data {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: baseline;
      padding-left: 10px;
      gap: 16px;

      font-family: "bungee", cursive;
      color: var(--yellow);

      span {
        /* border: 1px solid var(--black); */
        cursor: pointer;

        transition: 0.3s;
        :hover {
          transform: scale(1.05);
        }
      }
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

      @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        padding-right: 30px;
      }

      a {
        font-family: "bungee", cursive;
        color: var(--yellow);

        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #000;

        text-decoration: none;
        padding-right: 15px;
      }
    }
    .logo_mobile {
      img {
        width: 60px;
      }
    }
  }
`;
