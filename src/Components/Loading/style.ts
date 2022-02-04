import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import Background from '../../Assets/mix_background.png'

export const loading = keyframes`
	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-size: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  img {
    animation: ${loading} 4s linear infinite;
  }
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

export default Container
