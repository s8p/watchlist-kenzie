import { Button } from "@mui/material";
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
      <section>
        <div className="opacity_container"></div>

        <img src={image} alt="" />

        <div className="extra">
          <div className="text">
            <h3>{content.name}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto voluptates necessitatibus ipsam exercitationem. Quidem
              id, eveniet ipsum eum eaque minus. Sed natus doloremque fugit
              exercitationem eveniet molestias rem enim quaerat?
            </p>
          </div>

          <div className="buttonBar">
            <Button>Já assisti</Button>
            <Button>Remover</Button>
            {/* <Button>Detalhes</Button> */}
          </div>
        </div>
      </section>
    </Container>
  );
};
export default MyListItem;
