import {
  Container,
  MainBox,
  DescriptionContainer,
  CardContainer,
} from "./style";
import Card from "Components/AboutusComponents/Card";
import HomeButton from "Components/AboutusComponents/HomeButton";
import { useHistory } from "react-router-dom";

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
      q1: "Kenzie Academy Student",
      q2: "Mechanical Engineer",
      q3: "ReactJS , HTML , CSS ",
      q4: "UI, UX designer ",
      q5: "App Tester",
      linkedIn: "https://www.linkedin.com/in/thiagotrad/",
      gitHub: "https://github.com/tvstrad",
      picture: "https://avatars.githubusercontent.com/u/82231216?v=4",
    },
    {
      name: "Guilherme Braz",
      q1: "Teste",
      q2: "Teste",
      q3: "Teste",
      q4: "Teste",
      q5: "Teste",
      linkedIn:
        "https://www.linkedin.com/in/guilherme-braz-moreira-faria-484aa620a/",
      gitHub: "https://github.com/guilhermebrazdev",
      picture:
        "https://media-exp1.licdn.com/dms/image/D4E35AQGVXd8agpKWEw/profile-framedphoto-shrink_800_800/0/1640298699730?e=1643875200&v=beta&t=WIwepHFQzWtPzZWdh1B3waLdqJNf3QXmInNAI3Cx6MU",
    },
    {
      name: "Rodrigo de Souza",
      q1: "Teste",
      q2: "Teste",
      q3: "Teste",
      q4: "Teste",
      q5: "Teste",
      linkedIn: "https://www.linkedin.com/in/rodrigo-paranhos-4367391b8/",
      gitHub: "https://github.com/s8p",
      picture:
        "https://media-exp1.licdn.com/dms/image/C4E03AQEBYWn0bkLyKQ/profile-displayphoto-shrink_800_800/0/1626989426415?e=1649289600&v=beta&t=zIrWA6VjluYrONcDFqS6M5J53zPsvYzvb6vpoMA1_Nc",
    },
    {
      name: "Erivan Ferreira",
      q1: "Teste",
      q2: "Teste",
      q3: "Teste",
      q4: "Teste",
      q5: "Teste",
      linkedIn: "https://www.linkedin.com/in/erivan-ferreira-dev/",
      gitHub: "https://github.com/ErivanF",
      picture:
        "https://media-exp1.licdn.com/dms/image/D4D35AQE_7T7W4HEIVg/profile-framedphoto-shrink_800_800/0/1623347385601?e=1643875200&v=beta&t=55JMh42eXm5U_PTGb4uabvzk840tAaY52FofN-7uKeg",
    },
    {
      name: "Murilo Martins",
      q1: "Teste",
      q2: "Teste",
      q3: "Teste",
      q4: "Teste",
      q5: "Teste",
      linkedIn: "https://www.linkedin.com/in/murilolmartins/",
      gitHub: "https://github.com/murilolmartins",
      picture:
        "https://media-exp1.licdn.com/dms/image/D4D35AQH2Dchx5jbeCA/profile-framedphoto-shrink_800_800/0/1636396987374?e=1643875200&v=beta&t=W1R11CIevgmylv2CiP6E8cJRP6y9Ak12Kb6J1ruVd2I",
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
