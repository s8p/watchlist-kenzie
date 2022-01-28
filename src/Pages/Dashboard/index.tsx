import { Container, DashboardBox, PopularBox, TopRatedBox } from "./style";

import { useTmdb } from "Context/Series";
import CardView from "Components/CardView";

const Dashboard = () => {
  const { popular } = useTmdb();

  console.log("popular", popular);

  return (
    <Container>
      <DashboardBox>
        <header>Header</header>
        <div>Random movie</div>
        <section>
          <TopRatedBox>our picks</TopRatedBox>
          <PopularBox>
            {popular.map((element, index) => (
              <CardView key={index} content={element} />
            ))}
          </PopularBox>
        </section>
      </DashboardBox>
    </Container>
  );
};

export default Dashboard;
