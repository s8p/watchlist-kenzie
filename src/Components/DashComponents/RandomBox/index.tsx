import { memo, useState } from "react";

import Button from "Components/Button";
import ShowModal from "Components/MyListComponents/ShowModal";

import { Container } from "./style";

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

interface ContentProps {
  content: ProductProps;
}

const RandomBox = ({ content }: ContentProps) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <ShowModal content={content} isOpen={isOpen} setOpen={setOpen} />
      )}
      <Container>
        <img
          onClick={() => setOpen(true)}
          src={`//www.themoviedb.org/t/p/w600_and_h900_bestv2/${content.poster_path}`}
          alt="poster"
          id="poster"
        />
        <img
          src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${content.backdrop_path}`}
          alt="banner"
          id="banner"
        />
        <div>
          <section>
            <h1>{content.name}</h1>
            {!!content.overview !== false ? (
              <p>{content.overview}</p>
            ) : (
              <p>{content.name}</p>
            )}
          </section>
          <div>
            {" "}
            <Button onClick={() => setOpen(true)}>More details</Button>{" "}
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(RandomBox);
