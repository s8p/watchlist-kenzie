import CardView from "../CardView";

import { useTmdb } from "Context/Series";
import { Container } from "./style";

const PopularBox = () => {
  const { popular, topRated } = useTmdb();

  return (
    <Container>
      {/* Nosso array */}
      {topRated.map((element, index) => (
        <CardView key={index} content={element} />
      ))}
    </Container>
  );
};

export default PopularBox;
