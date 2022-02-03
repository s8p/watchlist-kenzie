import Button from "Components/Button";

import ShowModal from "../ShowModal";

import { useState } from "react";
import { UseUser } from "Context/User";
import { Container } from "./styles";

interface ProductProps {
  backdrop_path: string;
  first_air_date: string;
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  liked: boolean;
  status: "watched" | "watching" | "notWatched";
  idTmdb: number;
}

interface Serie {
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

interface MyLitItemProps {
  content: Serie;
}
const MyListItem = ({ content }: MyLitItemProps) => {
  const image = `//www.themoviedb.org/t/p/w600_and_h900_bestv2/${content.poster_path}`;
  const { removeSerie } = UseUser();

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <ShowModal content={content} isOpen={isOpen} setOpen={setOpen} />
      )}

      <Container onClick={() => setOpen(true)}>
        <section>
          <div className="opacity_container"></div>

          <img src={image} alt="" />

          <div className="extra">
            <div className="text">
              <h3>{content.name}</h3>
              <p>{content.overview}</p>
            </div>

            <div className="buttonBar">
              <Button
                onClick={(evt) => {
                  evt.stopPropagation();
                }}
              >
                Já assisti
              </Button>
              <Button
                onClick={(evt) => {
                  evt.stopPropagation();
                  removeSerie(content);
                }}
              >
                Remover
              </Button>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};
export default MyListItem;
