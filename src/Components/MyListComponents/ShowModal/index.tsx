import { GiStrikingArrows } from "react-icons/gi";
import { Modal } from "@mui/material";
import { useState, useEffect } from "react";

import { UseUser } from "Context/User";
import { ReactComponent as Rating } from "Assets/rating_star.svg";
import Button from "Components/Button";

import { Container, PosterBox, InfoBox, ButtonBox } from "./styles";

interface ProductProps {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
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

  const { addSerie, lista, removeSerie } = UseUser();

  const [include, setInclude] = useState(false);

  const verificar = (name: string) => {
    const currentSerie = lista.find((element) => {
      return element.name === name;
    });

    if (currentSerie !== undefined) {
      setInclude(true);
    }
  };

  useEffect(() => {
    verificar(content.name);
  }, []);

  return (
    <Modal onClose={onClose} open={isOpen}>
      <Container>
        <section>
          <PosterBox>
            <h3>{content.name}</h3>
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
              <p>Country: {content.origin_country}</p>
            </div>
          </InfoBox>
          <ButtonBox>
            {include ? (
              <Button
                onClick={() => {
                  removeSerie(content);
                  setOpen(false);
                }}
              >
                Remove
              </Button>
            ) : (
              <Button
                onClick={() => {
                  addSerie(content);
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
export default ShowModal;
