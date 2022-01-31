import { Button } from "@mui/material";
import Header from "Components/Header";
import { ButtonBar } from "./styles/ButtonBar";
import { MoviesList } from "./styles/MoviesList";

const Mylist = () => {
  return (
    <>
      <Header />
      <ButtonBar>
        <Button>Todos</Button>
        <Button>Vistos</Button>
      </ButtonBar>
      <MoviesList></MoviesList>
    </>
  );
};
export default Mylist;
