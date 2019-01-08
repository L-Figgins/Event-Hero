import styled from 'styled-components';

const Photo = styled.div`
  height: 550px;
  width: 550px;
  border: 1px solid green;
  background-image: url(${props => props.source});
  background-size: cover;
  background-position: center center;
`;

export default Photo;
