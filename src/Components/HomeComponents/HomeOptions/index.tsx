import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import HomeButton from "../HomeButton";
import { Container } from "./style";

const HomeOptions = () => {
  const history = useHistory();
  return (
    <Container>
      <h1>
        Watchlist is the app you need to help you keep track of all the shows
        and movies you love and want to watch !
      </h1>
      <div className="buttons_container">
        <HomeButton onClick={() => history.push("/login")}>LogIn</HomeButton>
        <HomeButton onClick={() => history.push("/register")}>
          Register
        </HomeButton>
      </div>
      <Link to="/aboutus">About Us</Link>
    </Container>
  );
};

export default HomeOptions;
