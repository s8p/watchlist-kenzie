import PopularBox from "Components/DashComponents/PopularBox";
import TopRatedBox from "Components/DashComponents/TopRatedBox";
import RandomBox from "Components/DashComponents/RandomBox";

import { useEffect } from "react";

import { Container, DashboardBox } from "./style";
import Header from "Components/Header";
import MenuMobile from "Components/MenuMobile";
import { UseUser } from "Context/User";
import Search from "Components/Search";
import SearchContainer from "Components/SearchContainer";

const Dashboard = () => {
  const { mobileOpen, search } = UseUser();
  return (
    <>
      <Container>
        <div className="opacity_container"></div>
        <DashboardBox>
          <header>
            <Header />
          </header>
          <Search />
          {search.length > 0 ? <SearchContainer /> : <RandomBox />}
          <section>
            <TopRatedBox />
            <PopularBox />
          </section>
        </DashboardBox>
      </Container>
      {mobileOpen && <MenuMobile />}
    </>
  );
};

export default Dashboard;
