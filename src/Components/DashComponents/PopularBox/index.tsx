import { useTmdb } from "Context/Series";
import { memo } from "react";
import CardView from "../CardView";

import { Container } from "./style";

const PopularBox = () => {
  const { popular } = useTmdb();

  return (
    <Container>
      {popular.map((element, index) => (
        <CardView key={index} content={element} />
      ))}
    </Container>
  );
};

export default memo(PopularBox);
