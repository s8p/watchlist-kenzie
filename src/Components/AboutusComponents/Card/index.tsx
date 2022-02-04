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
          <Link href={linkedIn} target="_blank">
            <LinkedInIcon />
          </Link>
          <Link href={gitHub} target="_blank">
            <GitHubIcon />
          </Link>
        </div>
      </header>
      <CardInfo>
        <img src={picture} alt="foto do dev" />
        <ul className="list">
          <li>{q1}</li>
          <li>{q2}</li>
          <li>{q3}</li>
          <li>{q4}</li>
          <li>{q5}</li>
        </ul>
      </CardInfo>
      <footer></footer>
    </Container>
  );
};
export default Card;
