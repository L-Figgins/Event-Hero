import styled from 'styled-components';
const Box = styled.div`
  display: flex;
  justify-content: center;
  padding: ${props => props.p || '0'};
`;

export default Box;
