import styled from "@emotion/styled";

export const Container = styled.div`
  /* background: var(--darkGray); */
  height: 380px;
  display: flex;
  overflow-x: scroll;
  gap: 10px;
  align-items: center;
  border-radius: 8px;
  
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
