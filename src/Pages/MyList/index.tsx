import Button from "Components/Button";
import Header from "Components/Header";
import { ButtonBar, List, Container, MyListBox } from "./style";
import MenuMobile from "Components/MenuMobile";
import { UseUser } from "Context/User";

const Mylist = () => {
  const { mobileOpen } = UseUser();

  return (
    <Container>
      <div className="opacity_container"></div>
      <MyListBox>
        <Header />
        <ButtonBar>
          <Button>Todos</Button>
          <Button>Vistos</Button>
        </ButtonBar>
        <List></List>
        {mobileOpen && <MenuMobile />}
      </MyListBox>
    </Container>
  );
};

export default Mylist;
