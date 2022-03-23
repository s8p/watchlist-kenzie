import { memo, useEffect, useState } from "react";
import { UseUser } from "Context/User";

import Button from "Components/Button";

import { Container, Title } from "./style";
import ShowModalMovies from "Components/MyListComponents/ShowModalMovie";

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

interface CardMovieProps {
  content: ProductProps;
}

const CardMovie = ({ content }: CardMovieProps) => {
  const image = `//www.themoviedb.org/t/p/w600_and_h900_bestv2/${content.poster_path}`;

  const [isOpen, setOpen] = useState(false);

  const { addMovie, listaMovie, removeMovie } = UseUser();

  const [include, setInclude] = useState(false);

  const verificar = (title: string) => {
    if (listaMovie.length > 0) {
      const exist = listaMovie.find((element) => {
        return element.title === title;
      });

      if (exist !== undefined) {
        setInclude(true);
      }
    }
  };

  useEffect(() => {
    verificar(content.title);
  }, [listaMovie]);

  return (
    <>
      {isOpen && (
        <ShowModalMovies content={content} isOpen={isOpen} setOpen={setOpen} />
      )}
      <Container onClick={() => setOpen(true)}>
        <img src={image} alt="poster" />
        <Title>
          <p>{content.title}</p>

          <div>
            {include ? (
              <Button
                className="addButton"
                onClick={(evt) => {
                  evt.stopPropagation();
                  removeMovie(content);
                  setInclude(false);
                }}
              >
                remove isto
              </Button>
            ) : (
              <Button
                className="addButton"
                onClick={(evt) => {
                  evt.stopPropagation();
                  addMovie(content);
                  setInclude(true);
                }}
              >
                Add to your list
              </Button>
            )}
          </div>
        </Title>
      </Container>
    </>
  );
};

export default memo(CardMovie);
