import { Button } from "@mui/material";
import Header from "Components/Header";
import { ButtonBar } from "./styles/ButtonBar";
import { List } from "./styles/List";

const Mylist = () => {
  return (
    <>
      <Header />
      <ButtonBar>
        <Button>Todos</Button>
        <Button>Vistos</Button>
      </ButtonBar>
      <List></List>
    </>
  );
};
export default Mylist;
