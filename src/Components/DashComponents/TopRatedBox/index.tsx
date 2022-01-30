import CardView from "../CardView";

import { useTmdb } from "Context/Series";
import { Container } from "./style";

const PopularBox = () => {
  const { popular } = useTmdb();

  return (
    <Container>
      {/* Nosso array */}
      {popular.map((element, index) => (
        <CardView key={index} content={element} />
      ))}
    </Container>
  );
};

export default PopularBox;
