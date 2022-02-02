import { Container } from "./style";
import Logo from "../../../../Assets/Logo 1E.png";

const FormsHeader = () => {
  return (
    <Container>
      <div className="image_container">
        <img src={Logo} alt="WatchList" />
      </div>
    </Container>
  );
};

export default FormsHeader;
