import styled from 'styled-components';
import NormalImg from 'components/Img';

const LogoIMG = styled(NormalImg)`
  height: ${props => props.height || '5%'};
  width: ${props => props.width || '5%'};
  margin: ${props => props.margin || '0'};
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0;
  z-index: 1;
`;

export default LogoIMG;
