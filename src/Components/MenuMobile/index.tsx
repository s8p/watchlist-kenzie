import { useAuth } from "Context/Auth";
import { UseUser } from "Context/User";
import { Link } from "react-router-dom";
import { Container } from "./style";
import { useHistory } from "react-router";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";

const MenuMobile = () => {
  const { user, setMobileOpen, setSearch } = UseUser();
  const { logOut } = useAuth();

  const history = useHistory();
  return (
    <Container>
      <div className="opacity_container"></div>
      <div className="header_container">
        <CloseIcon onClick={() => setMobileOpen(false)} />
        <div className="user_data">
          <div className="icon">
            <AccountCircleIcon />
          </div>
          <div className="data">
            <p>{user.name}</p>
            <span>{user.email}</span>
          </div>
        </div>
        <div></div>
      </div>
      <div className="links">
        <Link to="/dashboard" onClick={() => setSearch([])}>
          Dashboard
        </Link>
        <Link to="/mylist" onClick={() => setSearch([])}>
          My list
        </Link>
        <Link to="/aboutus" onClick={() => setSearch([])}>
          About Us
        </Link>
        <span onClick={() => logOut(history)}>LogOut</span>
      </div>
    </Container>
  );
};

export default MenuMobile;
