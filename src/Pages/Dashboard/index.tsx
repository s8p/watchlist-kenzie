import PopularBox from "Components/DashComponents/PopularBox";
import TopRatedBox from "Components/DashComponents/TopRatedBox";
import RandomBox from "Components/DashComponents/RandomBox";

import { Container, DashboardBox } from "./style";
import Header from "Components/Header";

const Dashboard = () => {
  return (
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
  );
};

export default Dashboard;
