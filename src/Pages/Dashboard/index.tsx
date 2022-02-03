import PopularBox from "Components/DashComponents/PopularBox";
import TopRatedBox from "Components/DashComponents/TopRatedBox";
import RandomBox from "Components/DashComponents/RandomBox";

import { useEffect } from "react";

import { Container, DashboardBox } from "./style";
import Header from "Components/Header";
import MenuMobile from "Components/MenuMobile";
import { UseUser } from "Context/User";
import { useTmdb } from "Context/Series";

const Dashboard = () => {
  const { mobileOpen, user } = UseUser();
  const { popularSeries } = useTmdb();

  console.log(user);

  useEffect(() => {
    popularSeries();
  }, []);
  return (
    <>
      <Container>
        <div className="opacity_container"></div>
        <DashboardBox>
          <header>
            <Header />
          </header>
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
