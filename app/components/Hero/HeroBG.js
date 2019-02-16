import styled from 'styled-components';

const HeroBG = styled.div`
  height: 75vh;
  /* display: flex; */
  background: linear-gradient(
      0deg,
      rgb(20, 20, 20),
      rgba(20, 20, 20, 1) 5%,
      transparent
    ),
    url(${props => props.img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 80vh;
  overflow-x: hidden;
  background-color: #0c0c0c;
  @media (max-width: 500px) {
    height: 60vh;
    min-height: 60vh;
  }
`;

export default HeroBG;
