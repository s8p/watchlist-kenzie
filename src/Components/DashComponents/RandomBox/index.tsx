import { useTmdb } from "Context/Series";
// import { useEffect } from "react";

import { Container } from "./style";

const RandomBox = () => {
  const { popular /*TvShow*/ } = useTmdb();

  let image;
  let poster;
  let overview;
  let title;

  const RandomPoster = () => {
    const RandomNumber = Math.round(Math.random() * popular.length);
    const TvShow = popular[RandomNumber];

    poster = TvShow.backdrop_path;
    console.log("iniciei");

    if (poster === null || undefined) {
      console.log("repetir");
      RandomPoster();
    } else {
      console.log("escolhenod image");
      image = `https://www.themoviedb.org/t/p/w533_and_h300_bestv2${poster}`;
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
      <img src={image} alt="banner" />
      <div>
        <section>
          <h1>Sinopse</h1>
          {overview !== "" ? <p>{overview}</p> : <p>{title}</p>}
        </section>
        <div>
          <button>details</button>
        </div>
      </div>
    </Container>
  );
};

export default RandomBox;
