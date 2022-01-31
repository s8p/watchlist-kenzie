import { Button } from "@mui/material";
import Header from "Components/Header";
import MyListItem from "Components/MyListComponents/ListItem";
import { ButtonBar } from "./styles/ButtonBar";
import { List } from "./styles/List";

const Mylist = () => {
  const TestObject = {
    backdrop_path: "/oKt4J3TFjWirVwBqoHyIvv5IImd.jpg",
    first_air_date: "2019-06-16",
    genre_ids: 18,
    id: 85552,
    name: "Euphoria",
    origin_country: "US",
    original_language: "en",
    original_name: "Euphoria",
    overview:
      "A group of high school students navigate love and friendships in a world of drugs, sex, trauma,and social media.",
    popularity: 3237.766,
    poster_path: "/jtnfNzqZwN4E32FGGxx1YZaBWWf.jpg",
    vote_average: 8.4,
    vote_count: 5941,
    status: "watched",
  };
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
