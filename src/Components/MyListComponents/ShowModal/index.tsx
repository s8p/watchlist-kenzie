import { Modal, Button } from "@mui/material";
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
interface ModalProps {
  content: ProductProps;
  isOpen: boolean;
  setOpen: (state: boolean) => void;
}
const ShowModal = ({ content, isOpen, setOpen }: ModalProps) => {
  const onClose = () => {
    setOpen(false);
  };
  const image1 = `//www.themoviedb.org/t/p/original/${content.backdrop_path}`;
  const image2 = `//www.themoviedb.org/t/p/w600_and_h900_bestv2/${content.poster_path}`;
  return (
    <Modal onClose={onClose} open={isOpen}>
      <Container>
        <h3>{content.name}</h3>
        <img src={image1} alt="" className="backdrop" />
        <img src={image2} alt="" className="poster" />
        <div className="info">
          <div className="overview">{content.overview}</div>
          <div className="rating">
            <p>
              Rated {content.vote_average} from {content.vote_count} votes
            </p>
            <p>Popularity: {Math.floor(content.popularity)}</p>
            <p>Country: {content.origin_country}</p>
          </div>
        </div>
        <div className="buttonBar">
          <Button>Add do My List</Button>
        </div>
      </Container>
    </Modal>
  );
};
export default ShowModal;
