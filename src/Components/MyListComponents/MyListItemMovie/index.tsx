import Button from "Components/Button";

import { useState, memo } from "react";
import { UseUser } from "Context/User";
import { Container } from "./style";
import ShowModalMovies from "../ShowModalMovie";

interface Movie {
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

interface MyLitItemProps {
  content: MyMovie;
}
const MyListItemMovie = ({ content }: MyLitItemProps) => {
  const image = `//www.themoviedb.org/t/p/w600_and_h900_bestv2/${content.poster_path}`;
  const { removeMovie } = UseUser();

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <ShowModalMovies content={content} isOpen={isOpen} setOpen={setOpen} />
      )}

      <Container onClick={() => setOpen(true)}>
        <section>
          <div className="opacity_container"></div>

          <img src={image} alt="" />

          <div className="extra">
            <div className="text">
              <h3>{content.title}</h3>
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
                  removeMovie(content);
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
export default MyListItemMovie;
