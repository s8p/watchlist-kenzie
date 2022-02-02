import styled from "@emotion/styled";

export const SmallContainer = styled.div`
  /* background: var(--darkGray); */
  height: 380px;
  display: flex;
  overflow-x: scroll;
  gap: 10px;
  align-items: center;
  /* padding: 0px 20px 0px 20px; */
  border-radius: 8px;
  /* opacity: 0.1; */
  /* position: relative; */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: var(--yellow);
    font-size: 20px;
    position: relative;
    align-self: start;
  }
`;
