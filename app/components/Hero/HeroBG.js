import styled from 'styled-components';
import BG from '../../images/BG/HH_BG.jpg';

const HeroBG = styled.div`
  width: 100%;
  height: 75vh;
  background-image: url(${BG});
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
