import Container from "./style";
import Logo from "../../Assets/Logo.png";

const Loading = () => {
  return (
    <Container>
      <div className="opacity_container"></div>
      <img src={Logo} alt="Logo" />
    </Container>
  );
};

export default Loading;
