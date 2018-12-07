import styled from 'styled-components';
import NormalImg from 'components/Img';

const NavIMG = styled(NormalImg)`
  height: ${props => props.height || '70%'};
  width: ${props => props.width || 'auto%'};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 0 auto;
`;

export default NavIMG;
