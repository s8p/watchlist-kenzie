import Link from "@mui/material/Link";
import { Container, CardInfo } from "./style";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

interface CardProps {
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

const Card = ({
  name,
  q1,
  q2,
  q3,
  q4,
  q5,
  linkedIn,
  gitHub,
  picture,
}: CardProps) => {
  return (
    <Container>
      <header>
        <h3>{name}</h3>
        <div>
          <Link href={linkedIn}>
            <LinkedInIcon />
          </Link>
          <Link href={gitHub}>
            <GitHubIcon />
          </Link>
        </div>
      </header>
      <CardInfo>
        <ul className="list">
          <li>{q1}</li>
          <li>{q2}</li>
          <li>{q3}</li>
          <li>{q4}</li>
          <li>{q5}</li>
        </ul>
        <img src={picture} alt="foto do dev" />
      </CardInfo>
      <footer></footer>
    </Container>
  );
};
export default Card;
