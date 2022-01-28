import styled from "@emotion/styled";

export const Container = styled.div`
  background: orange;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;

  transition: 0.8s;

  :hover,
  :focus {
    height: 360px;
    width: 240px;
  }
`;

export const Title = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 70%
  );
  border-top-right-radius: 40%;
  border-top-left-radius: 40%;
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 2rem;
  color: var(--white);
  overflow: hidden;

  transition: 0.3s;

  position: absolute;

  :hover,
  :focus {
    height: 80px;
  }

  button {
    margin-top: 20px;
  }
`;
