import { useTmdb } from "Context/Series";

import { Container } from "./style";

const RandomBox = () => {
  const { popular, TvShow } = useTmdb();

  let image;

  if (popular.length > 0) {
    const poster = TvShow.backdrop_path;
    image = `https://www.themoviedb.org/t/p/w533_and_h300_bestv2${poster}`;
  }

  return (
    <Container>
      <img src={image} alt="banner" />
      {/* <div>
        teste imagina um monte de info importante sobre nosso app e nosso filme
        e nossa serie e api bem feita que vai ser mt Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Consequuntur a quia vitae, necessitatibus
        praesentium dolores enim? Adipisci, delectus aspernatur ullam tenetur
        molestiae corporis error unde earum quisquam nisi inventore assumenda.
      </div> */}
    </Container>
  );
};

export default RandomBox;
