import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, CardInfo } from "./style";

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
      </header>
      <CardInfo>
        <ul>
          <li>{q1}</li>
          <li>{q2}</li>
          <li>{q3}</li>
          <li>{q4}</li>
          <li>{q5}</li>
        </ul>
        <img src={picture} alt="foto do dev" />
      </CardInfo>
      <footer>
        <Link to={linkedIn}>LinkedIn</Link>

        <Link to={gitHub}>gitHub</Link>
      </footer>
    </Container>
  );
};
export default Card;
