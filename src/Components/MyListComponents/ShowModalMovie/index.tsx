import { GiStrikingArrows } from "react-icons/gi";
import { Modal } from "@mui/material";
import { useState, useEffect } from "react";

import { UseUser } from "Context/User";
import { ReactComponent as Rating } from "Assets/rating_star.svg";
import Button from "Components/Button";

import { Container, PosterBox, InfoBox, ButtonBox } from "./style";

interface ProductProps {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

interface MyMovie {
  backdrop_path: string;
  title: string;
  original_language: string;
  popularity: number;
  overview: string;
  poster_path: string;
  vote_average: number;
  liked: false;
  idTmdb: number;
  status: "watched" | "watching" | "notWatched";
  userId: number;
  id: number;
}

interface ModalProps {
  content: ProductProps | MyMovie;
  isOpen: boolean;
  setOpen: (state: boolean) => void;
}

const ShowModalMovies = ({ content, isOpen, setOpen }: ModalProps) => {
  const onClose = () => {
    setOpen(false);
  };

  const image1 = `//www.themoviedb.org/t/p/original/${content.backdrop_path}`;
  const image2 = `//www.themoviedb.org/t/p/w600_and_h900_bestv2/${content.poster_path}`;

  const { addMovie, listaMovie, removeMovie } = UseUser();

  const [include, setInclude] = useState(false);

  const verificar = (title: string) => {
    const currentSerie = listaMovie.find((element) => {
      return element.title === title;
    });

    if (currentSerie !== undefined) {
      setInclude(true);
    }
  };

  useEffect(() => {
    verificar(content.title);
  }, []);

  return (
    <Modal onClose={onClose} open={isOpen}>
      <Container>
        <section>
          <PosterBox>
            <h3>{content.title}</h3>
            <img src={image1} alt="" className="backdrop" />
            <img src={image2} alt="" className="poster" />
          </PosterBox>
          <InfoBox>
            <section>{content.overview}</section>
            <div>
              <p>
                <Rating id="rating" />
                {content.vote_average}
              </p>
              <p>
                <GiStrikingArrows id="popularity" />
                {Math.floor(content.popularity)}
              </p>
              <p>Language: {content.original_language}</p>
            </div>
          </InfoBox>
          <ButtonBox>
            {include ? (
              <Button
                onClick={() => {
                  removeMovie(content);
                  setOpen(false);
                }}
              >
                Remove
              </Button>
            ) : (
              <Button
                onClick={() => {
                  addMovie(content);
                  setOpen(false);
                }}
              >
                Adicionar
              </Button>
            )}
          </ButtonBox>
        </section>
      </Container>
    </Modal>
  );
};
export default ShowModalMovies;
