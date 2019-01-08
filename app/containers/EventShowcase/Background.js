import styled from 'styled-components';

const Background = styled.div`
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 80vh;
`;

export default Background;
