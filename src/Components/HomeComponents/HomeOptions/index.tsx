import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import Button from "Components/Button";

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
        <Button onClick={() => history.push("/login")}>Login</Button>
        <Button onClick={() => history.push("/register")}>Register</Button>
      </div>
      <Link to="/aboutus">About Us</Link>
    </Container>
  );
};

export default HomeOptions;
