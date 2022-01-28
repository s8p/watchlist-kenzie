import { Container, Title } from "./style";

interface ProductProps {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number;
  id: number;
  name: string;
  origin_country: string;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

interface CardViewProps {
  content: ProductProps;
}

const CardView = ({ content }: CardViewProps) => {
  const image = `//www.themoviedb.org/t/p/w600_and_h900_bestv2/${content.poster_path}`;

  return (
    <Container>
      <img src={image} alt="poster" />
      <Title>
        <p>{content.name}</p>
        <button>Adicionar</button>
      </Title>
    </Container>
  );
};

export default CardView;
