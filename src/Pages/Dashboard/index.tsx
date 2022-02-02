import PopularBox from "Components/DashComponents/PopularBox";
import TopRatedBox from "Components/DashComponents/TopRatedBox";
import RandomBox from "Components/DashComponents/RandomBox";

import { Container, DashboardBox } from "./style";
import Header from "Components/Header";
import MenuMobile from "Components/MenuMobile";
import { UseUser } from "Context/User";
import Search from "Components/Search";

const Dashboard = () => {
  const { mobileOpen } = UseUser();
  return (
    <>
      <Container>
        <div className="opacity_container"></div>
        <DashboardBox>
          <header>
            <Header />
          </header>
          <Search />
          <RandomBox />
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
