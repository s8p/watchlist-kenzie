import { UseUser } from "Context/User";
import { useState } from "react";
import ButtonSearch from "./Button";
import InputSearch from "./Input";
import { Container } from "./style";

const Search = () => {
  const { searchSerie } = UseUser();
  const [input, setInput] = useState("");

  return (
    <Container>
      <InputSearch onChange={(e) => setInput(e.target.value)} value={input} />
      <ButtonSearch
        onClick={() => {
          searchSerie(input);
          setInput("");
        }}
      />
    </Container>
  );
};

export default Search;
