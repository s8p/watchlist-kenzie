import Button from "Components/Button";
import Header from "Components/Header";
import { ButtonBar, List, Container, MyListBox } from "./style";
import MenuMobile from "Components/MenuMobile";
import { UseUser } from "Context/User";
import MyListItem from "Components/MyListComponents/ListItem";
import { useEffect } from "react";
import Search from "Components/Search";
import SearchContainer from "Components/SearchContainer";
import Empty from "Components/MyListComponents/Empty";

const Mylist = () => {
  const { mobileOpen, user, getUserData, search, setSearch } = UseUser();
  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <Container>
      <div className="opacity_container"></div>
      <MyListBox>
        <Header />
        <div className="search_container">
          <Search />
        </div>
        <ButtonBar>
          {search.length < 1 ? (
            <>
              <Button>Todos</Button>
              <Button>Vistos</Button>
            </>
          ) : (
            <Button onClick={() => setSearch([])}>Voltar</Button>
          )}
        </ButtonBar>
        <List display={search.length > 0 ? false : true}>
          {search.length > 0 ? (
            <SearchContainer />
          ) : user.watchlist && user.watchlist.length > 0 ? (
            user.watchlist.map((serie, index) => (
              <MyListItem content={serie} key={index} />
            ))
          ) : (
            <Empty />
          )}
        </List>
        {mobileOpen && <MenuMobile />}
      </MyListBox>
    </Container>
  );
};

export default Mylist;
