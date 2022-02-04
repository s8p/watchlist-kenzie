import HomeLogo from "Components/HomeComponents/HomeLogo";
import HomeOptions from "Components/HomeComponents/HomeOptions";
import { Container } from "./style";
const Home = () => {
  return (
    <Container>
      <div className="opacity_container"></div>
      <HomeLogo />
      <HomeOptions />
    </Container>
  );
};

export default Home;
