import styled from "@emotion/styled";

export const List = styled.div`
  width: 80%;
  .seriesCard {
    margin-top: 1em;
    display: flex;
    &:nth-child(odd) {
      flex-direction: row;
    }
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;
