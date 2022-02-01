import { Button } from "@mui/material";
import Header from "Components/Header";
import MenuMobile from "Components/MenuMobile";
import { UseUser } from "Context/User";
import { ButtonBar } from "./styles/ButtonBar";
import { List } from "./styles/List";

const Mylist = () => {
  const { mobileOpen } = UseUser();
  return (
    <>
      <Header />
      <ButtonBar>
        <Button>Todos</Button>
        <Button>Vistos</Button>
      </ButtonBar>
      <List></List>
      {mobileOpen && <MenuMobile />}
    </>
  );
};
export default Mylist;
