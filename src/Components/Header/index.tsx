import { Button } from "@mui/material";
import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <div className="logo">Logo</div>
      <div className="navPC">
        <Button>My list</Button>
        <Button>Dashboard</Button>
      </div>
      <div className="navMobile">IconeMobile</div>
    </Container>
  );
};

export default Header;
