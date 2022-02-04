import styled from "@emotion/styled";

export const SmallContainer = styled.div`
  height: 380px;
  display: flex;
  overflow-x: scroll;
  gap: 10px;
  align-items: center;
  border-radius: 8px;
  position: relative;
  padding: 0px 40px;


  ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 100px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--gray);
      border-radius: 100px;
    }

  
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-family: "bungee", cursive;
    color: var(--yellow);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000;

    font-size: 1.5rem;

    color: var(--yellow);
    position: relative;
    align-self: start;
  }
`;
