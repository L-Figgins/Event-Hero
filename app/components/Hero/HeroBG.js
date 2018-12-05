import styled from 'styled-components';
import BG from '../../images/BG/HH_BG.jpg';

const HeroBG = styled.div`
  height: 75vh;
  display: flex;
  background-image: url(${BG});
  background: linear-gradient(
      0deg,
      rgb(20, 20, 20),
      rgba(20, 20, 20, 1) 15%,
      transparent
    ),
    url(${BG});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
  background-color: #0c0c0c;
  @media (max-width: 500px) {
    height: 100vh;
  }
`;

export default HeroBG;
