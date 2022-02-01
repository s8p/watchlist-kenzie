import { Button } from "@mui/material";
import CardView from "Components/DashComponents/CardView";
import { Container } from "./styles";

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

interface MyLitItemProps {
  content: ProductProps;
}
const MyListItem = ({ content }: MyLitItemProps) => {
  const image = `//www.themoviedb.org/t/p/w600_and_h900_bestv2/${content.poster_path}`;
  return (
    <Container>
      <img src={image} alt="" />
      <div className="extra">
        <div className="text">
          <h3>{content.name}</h3>
          {content.overview}
        </div>

        <div className="buttonBar">
          <Button>Já assisti</Button>
          <Button>Remover</Button>
          <Button>Detalhes</Button>
        </div>
      </div>
    </Container>
  );
};
export default MyListItem;
