import styled from 'styled-components';

const H1 = styled.h1`
  font-size: ${props => props.fontSize || '2em'};
  margin-bottom: ${props => props.marginBot || '0'};
  background-color: ${props => props.backgroundColor};
`;

export default H1;
