import { memo, useState } from "react";

import { useTmdb } from "Context/Series";
import Button from "Components/Button";
import ShowModal from "Components/MyListComponents/ShowModal";

import { Container } from "./style";

const RandomBox = () => {
  const { popular } = useTmdb();

  const [isOpen, setOpen] = useState(false);

  let imageBanner;
  let banner;
  let imagePoster;
  let poster;
  let overview;
  let title;
  let TvShow;

  const RandomPoster = async () => {
    const RandomNumber = Math.round(Math.random() * popular.length);
    TvShow = popular[RandomNumber];

    banner = TvShow.backdrop_path;
    poster = TvShow.poster_path;

    if (banner === null || undefined) {
      RandomPoster();
    } else {
      imageBanner = `https://www.themoviedb.org/t/p/w533_and_h300_bestv2${banner}`;
      imagePoster = `//www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster}`;
      overview = TvShow.overview;
      title = TvShow.name;
    }
  };

  if (popular.length > 0) {
    RandomPoster();
  }

  return (
    <>
      {/* {isOpen && (
        <ShowModal content={TvShow} isOpen={isOpen} setOpen={setOpen} />
      )} */}
      <Container>
        <img src={imagePoster} alt="poster" id="poster" />
        <img src={imageBanner} alt="banner" id="banner" />
        <div>
          <section>
            <h1>{title}</h1>
            {!!overview !== false ? <p>{overview}</p> : <p>{title}</p>}
          </section>
          <div>
            <Button>More details</Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(RandomBox);
