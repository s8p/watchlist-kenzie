import { UseUser } from "Context/User";
import { useEffect } from "react";
import { Container, HighlightSpan } from "./styles";
import LogoMobile from "../../Assets/LogoMobile.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useAuth } from "Context/Auth";
import { useHistory } from "react-router";

const Header = () => {
  const { user, getUserData, setMobileOpen, setSearch } = UseUser();
  const { logOut } = useAuth();
  const history = useHistory();
  useEffect(() => {
    getUserData();
  }, [getUserData]);
  return (
    <Container>
      <div className="logo">
        <AccountCircleIcon />
        <div className="user_data">
          <p>
            Welcome , <span>{user.name}</span>
          </p>
          <HighlightSpan onClick={() => logOut(history)}>LogOut</HighlightSpan>
        </div>
      </div>
      <div className="nav_container">
        <div className="nav_desktop">
          <NavLink
            to="/dashboard"
            activeStyle={{ color: `rgb(247, 214, 51) ` }}
            onClick={() => setSearch([])}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/mylist"
            activeStyle={{ color: `rgb(247, 214, 51) ` }}
            onClick={() => setSearch([])}
          >
            My list
          </NavLink>
          <NavLink
            to="/aboutus"
            activeStyle={{ color: `rgb(247, 214, 51) ` }}
            onClick={() => setSearch([])}
          >
            About Us
          </NavLink>
        </div>
        <div className="logo_mobile">
          <img src={LogoMobile} alt="Logo" />
        </div>
      </div>
      <div className="mobile_menu">
        <MenuIcon onClick={() => setMobileOpen(true)} />
      </div>
    </Container>
  );
};

export default Header;
