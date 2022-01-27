import HomeButton from "../HomeButton";
import { Container } from "./style";

const HomeOptions = () => {
  return (
    <Container>
      <h1>
        Watchlist is the app you need to help you keep track of all the shows
        and movies you love and want to watch !
      </h1>
      <div className="buttons_container">
        <HomeButton>LogIn</HomeButton>
        <HomeButton>Register</HomeButton>
      </div>
    </Container>
  );
};

export default HomeOptions;
