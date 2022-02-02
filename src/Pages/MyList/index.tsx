import Button from "Components/Button";
import Header from "Components/Header";
import { ButtonBar, List, Container, MyListBox } from "./style";
import MenuMobile from "Components/MenuMobile";
import { UseUser } from "Context/User";
import MyListItem from "Components/MyListComponents/ListItem";
import { useEffect } from "react";

const Mylist = () => {
  const { mobileOpen, user, getUserData } = UseUser();
  useEffect(() => {
    getUserData();
    console.log("list", user.watchlist);
  }, [getUserData]);

  return (
    <Container>
      <div className="opacity_container"></div>
      <MyListBox>
        <Header />
        <ButtonBar>
          <Button>Todos</Button>
          <Button>Vistos</Button>
        </ButtonBar>
        <List>
          {user.watchlist &&
            user.watchlist.map((serie, index) => (
              <MyListItem content={serie} key={index} />
            ))}
        </List>
        {mobileOpen && <MenuMobile />}
      </MyListBox>
    </Container>
  );
};

export default Mylist;
