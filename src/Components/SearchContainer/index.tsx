import CardView from "../DashComponents/CardView";

import { Container, SmallContainer } from "./style";
import { UseUser } from "Context/User";

const SearchContainer = () => {
  const { search } = UseUser();

  return (
    <Container>
      <h1>Search results...</h1>
      <SmallContainer>
        {search.map((element, index) => (
          <CardView key={index} content={element} />
        ))}
      </SmallContainer>
    </Container>
  );
};

export default SearchContainer;
