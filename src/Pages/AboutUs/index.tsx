import {
  Container,
  MainBox,
  DescriptionContainer,
  CardContainer,
} from "./style";
import Card from "Components/AboutusComponents/Card";
import HomeButton from "Components/AboutusComponents/HomeButton";
import { useHistory } from "react-router-dom";

import erivan from "Assets/erivan.jpg";
import murilo from "Assets/murilo.jpg";
import guilherme from "Assets/guilhermeDev.png";

import Header from "../../Components/Header";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MenuMobile from "Components/MenuMobile";
import { UseUser } from "Context/User";
const Aboutus = () => {
  const authToken = localStorage.getItem("@WatchList:Token");
  const history = useHistory();
  const { mobileOpen } = UseUser();
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
  const devList: Dev[] = [
    {
      name: "Thiago Trad",
      q1: "Kenzie Academy Q2 Student",
      q2: "Quality Assurance",
      q3: "ReactJS , HTML , CSS ",
      q4: "UI, UX designer ",
      q5: "Mechanical Engineer",
      linkedIn: "https://www.linkedin.com/in/thiagotrad/",
      gitHub: "https://github.com/tvstrad",
      picture: "https://avatars.githubusercontent.com/u/82231216?v=4",
    },
    {
      name: "Guilherme Braz",
      q1: "Kenzie Academy Q2 Student",
      q2: "Scrum Master",
      q3: "Computer Engineering",
      q4: "React, TypeScript, NodeJS",
      q5: "",
      linkedIn:
        "https://www.linkedin.com/in/guilherme-braz-moreira-faria-484aa620a/",
      gitHub: "https://github.com/guilhermebrazdev",
      picture: guilherme,
    },
    {
      name: "Rodrigo de Souza",
      q1: "Kenzie Academy Q2 Student",
      q2: "Tech Lead",
      q3: "Bash devoleper",
      q4: "Linux Enthusiast",
      q5: "React, TypeScript, NodeJS",
      linkedIn: "https://www.linkedin.com/in/rodrigo-paranhos-4367391b8/",
      gitHub: "https://github.com/s8p",
      picture:
        "https://media-exp1.licdn.com/dms/image/C4E03AQEBYWn0bkLyKQ/profile-displayphoto-shrink_800_800/0/1626989426415?e=1649289600&v=beta&t=zIrWA6VjluYrONcDFqS6M5J53zPsvYzvb6vpoMA1_Nc",
    },
    {
      name: "Erivan Ferreira",
      q1: "Kenzie Academy Q2 Student",
      q2: "Quality Assurance",
      q3: "Game Design Enthusiast",
      q4: "React, TypeScript, Godot",
      q5: "Comic relief",
      linkedIn: "https://www.linkedin.com/in/erivan-ferreira-dev/",
      gitHub: "https://github.com/ErivanF",
      picture: erivan,
    },
    {
      name: "Murilo Martins",
      q1: "Kenzie Academy Q2 Student",
      q2: "Product Owner",
      q3: "Business Student",
      q4: "React/TypeScript/NodeJS",
      q5: "BodyBuilder",
      linkedIn: "https://www.linkedin.com/in/murilolmartins/",
      gitHub: "https://github.com/murilolmartins",
      picture: murilo,
    },
  ];

  return (
    <Container>
      <div className="opacity_container"></div>

      <MainBox>
        {authToken && <Header />}
        <section className="content">
          <DescriptionContainer>
            <header>
              <h3> The Watchlist Team</h3>
              {!authToken && (
                <HomeButton className="Return" onClick={() => history.goBack()}>
                  <ArrowBackIosIcon />
                </HomeButton>
              )}
            </header>
            <p>
              The <span>watchlist </span>
              is a plataform built to assist users to track their favorite
              shows, movies and make sure they keep track of that film a friend
              recommended. However who build it? Who maintains it? Here you will
              find a brief profile of all the developers involved in the
              creation and maintenace of the plataform.
            </p>
          </DescriptionContainer>
          <CardContainer>
            {devList.map((dev) => (
              <Card
                key={dev.name}
                name={dev.name}
                q1={dev.q1}
                q2={dev.q2}
                q3={dev.q3}
                q4={dev.q4}
                q5={dev.q5}
                linkedIn={dev.linkedIn}
                gitHub={dev.gitHub}
                picture={dev.picture}
              ></Card>
            ))}
          </CardContainer>
        </section>
      </MainBox>
      {mobileOpen && <MenuMobile />}
    </Container>
  );
};
export default Aboutus;
