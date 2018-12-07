import styled from 'styled-components';
import NormalImg from 'components/Img';

const AboutIMG = styled(NormalImg)`
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0;
  transition: 0.5s ease;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3);

  &:hover {
    box-shadow: 0px 15px 0px 0px rgba(0, 0, 0, 0.5);
    transition: 0.5s ease;
    border: 1px solid rgb(0, 0, 0, 0.5);
  }
`;

export default AboutIMG;
