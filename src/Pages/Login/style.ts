import styled from '@emotion/styled'
import Background from '../../Assets/mix_background.png'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-size: 100%;
  background-color: rgba(10, 23, 55, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .opacity_container {
    position: absolute;
    width: 100vw;
    height: 100vh;
    opacity: 0.6;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.586053) 0.01%,
      rgba(0, 0, 0, 0) 0.02%,
      rgba(0, 0, 0, 0.586053) 0.03%,
      #000000 99.99%
    );
  }
`
