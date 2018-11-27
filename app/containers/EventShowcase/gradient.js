import styled from 'styled-components';

const Gradient = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100%;
  position: absolute;
  z-index: 2;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 0) 35%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export default Gradient;
