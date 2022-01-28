import { useTmdb } from "Context/Series";
import CardView from "../CardView";

import { Container } from "./style";

const PopularBox = () => {
  const { popular } = useTmdb();

  console.log("popular", popular);

  return (
    <Container>
      {popular.map((element, index) => (
        <CardView key={index} content={element} />
      ))}
    </Container>
  );
};

export default PopularBox;
