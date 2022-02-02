import { memo } from "react";

import { useTmdb } from "Context/Series";
import Button from "Components/Button";

import { Container } from "./style";

const RandomBox = () => {
  const { popular /*TvShow*/ } = useTmdb();

  let imageBanner;
  let banner;
  let imagePoster;
  let poster;
  let overview;
  let title;

  const RandomPoster = async () => {
    const RandomNumber = Math.round(Math.random() * popular.length);
    const TvShow = popular[RandomNumber];

    banner = TvShow.backdrop_path;
    poster = TvShow.poster_path;
    console.log("iniciei");

    if (banner === null || undefined) {
      console.log("repetir");
      RandomPoster();
    } else {
      console.log("escolhenod image");
      imageBanner = `https://www.themoviedb.org/t/p/w533_and_h300_bestv2${banner}`;
      imagePoster = `//www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster}`;
      overview = TvShow.overview;
      title = TvShow.name;
    }
  };

  if (popular.length > 0) {
    console.log("popular maior que lenght");
    RandomPoster();
  }

  return (
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
  );
};

export default memo(RandomBox);
