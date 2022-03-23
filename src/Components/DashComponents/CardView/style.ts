import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Container = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;

  img {
    border-radius: 8px;
  }

  transition: 0.8s;

  :hover,
  :focus {
    height: 360px;
    width: 240px;

    div {
      /* background: linear-gradient(
        to bottom,
        rgba(255, 0, 0, 0) 0%,
        rgba(10, 10, 40, 1) 40%
      ); */
      height: 150px;

      p {
        padding-top: 12px;
      }

      > div {
        padding-top: 0px;
      }
    }
  }
`

export const Title = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 70%
  );

  border-top-right-radius: 40%;
  border-top-left-radius: 40%;

  display: flex;
  flex-direction: column;

  padding-top: 12px;
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 1.8rem;
  color: var(--white);
  overflow: hidden;

  /* background: orange; */

  transition: 0.7s;

  position: absolute;
  p {
    margin-top: 12px;
  }

  > div {
    padding-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    section {
      width: 155px;

      button {
        color: var(--black);
      }
    }
  }
`

export const Container2 = styled(motion.div)`
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  cursor: pointer;
`
export const InfoBox = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 70% 1em 1em 1em;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 60%);
  .button-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .info-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .rating,
    .flag {
      color: var(--white);
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      font-size: 15px;
      gap: 5px;
      cursor: default;
    }
  }
  svg {
    width: 40px;
    height: 40px;
  }
`
