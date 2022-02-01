import { UseUser } from "Context/User";
import { useEffect } from "react";
import { Container } from "./styles";
import LogoMobile from "../../Assets/LogoMobile.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useAuth } from "Context/Auth";
import { useHistory } from "react-router";

const Header = () => {
  const { user, getUserData } = UseUser();
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
          <p>{user.name}</p>
          <p>{user.email}</p>
          <span onClick={() => logOut(history)}>LogOut</span>
        </div>
      </div>
      <div className="nav_container">
        <div className="nav_desktop">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/mylist">My list</Link>
          <Link to="Dashboard">About Us</Link>
        </div>
        <div className="logo_mobile">
          <img src={LogoMobile} alt="Logo" />
        </div>
      </div>
      <div className="mobile_menu">
        <MenuIcon />
      </div>
    </Container>
  );
};

export default Header;
