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
    color: var(--yellow);
    font-size: 20px;
    position: relative;
    align-self: start;
  }
`;
