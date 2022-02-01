import {
  Container,
  MainBox,
  DescriptionContainer,
  CardContainer,
} from "./style";

import Card from "Components/AboutusComponents/Card";
import HomeButton from "Components/AboutusComponents/HomeButton";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Aboutus = () => {
  const authToken = localStorage.getItem("@WatchList:Token");
  const history = useHistory();

  interface Dev {
    name: string;
    q1: string;
    q2: string;
    q3: string;
    q4: string;
    q5: string;
    linkedIn: string;
    gitHub: string;
    picture: string;
  }
  const [devList, setDevList] = useState<Dev[]>([
    {
      name: "Thiago Trad",
      q1: "Teste",
      q2: "Teste",
      q3: "Teste",
      q4: "Teste",
      q5: "Teste",
      linkedIn: "Link",
      gitHub: "Link",
      picture: "Link",
    },
    {
      name: "Guilherme Braz",
      q1: "Teste",
      q2: "Teste",
      q3: "Teste",
      q4: "Teste",
      q5: "Teste",
      linkedIn: "Link",
      gitHub: "Link",
      picture: "Link",
    },
    {
      name: "Rodrigo de Souza",
      q1: "Teste",
      q2: "Teste",
      q3: "Teste",
      q4: "Teste",
      q5: "Teste",
      linkedIn: "Link",
      gitHub: "Link",
      picture: "Link",
    },
    {
      name: "Erivan Ferreira",
      q1: "Teste",
      q2: "Teste",
      q3: "Teste",
      q4: "Teste",
      q5: "Teste",
      linkedIn: "Link",
      gitHub: "Link",
      picture: "Link",
    },
    {
      name: "Murilo Martins",
      q1: "Teste",
      q2: "Teste",
      q3: "Teste",
      q4: "Teste",
      q5: "Teste",
      linkedIn: "Link",
      gitHub: "Link",
      picture: "Link",
    },
  ]);

  return (
    <Container>
      {/* <div className="opacity_container"></div> */}
      <MainBox>
        {authToken && <header>Header</header>}
        {!authToken && (
          <HomeButton onClick={() => history.goBack()}> "Arrow" </HomeButton>
        )}
        <DescriptionContainer>
          <h3> The Watchlist Team</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ullam
            nemo corrupti illum explicabo laboriosam distinctio vitae ea
            deserunt cum, qui molestiae nam, placeat autem eius laborum impedit
            nisi! Quasi?
          </p>
        </DescriptionContainer>
        <CardContainer>
          {devList.map((dev) => (
            <Card
              name={dev.name}
              q1={dev.q1}
              q2={dev.q1}
              q3={dev.q1}
              q4={dev.q1}
              q5={dev.q1}
              linkedIn={dev.linkedIn}
              gitHub={dev.gitHub}
              picture={dev.picture}
            ></Card>
          ))}
        </CardContainer>
      </MainBox>
    </Container>
  );
};

export default Aboutus;
