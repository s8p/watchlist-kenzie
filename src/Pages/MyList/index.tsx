import { Button } from "@mui/material";
import Header from "Components/Header";
import MyListItem from "Components/MyListComponents/ListItem";
import ShowModal from "Components/MyListComponents/ShowModal";
import { useState } from "react";
import { ButtonBar } from "./styles/ButtonBar";
import { List } from "./styles/List";

const Mylist = () => {
  return (
    <>
      <Header />
      <ButtonBar>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Todos
        </Button>
        <Button>Vistos</Button>
      </ButtonBar>
      <List></List>
    </>
  );
};
export default Mylist;
