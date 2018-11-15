import styled from 'styled-components';

const CardWrapper = styled.div`
  background: #1e1e1e;
  box-shadow: 0px 10px 45px 0px rgba(0, 0, 0, 0.5);
  width: 10rem;
  height: 10rem;
  margin: 0.75rem;
  position: relative;
  text-align: left;
  border-radius: 1rem;

  h1 {
    color: #fff;
  }
  p {
    color: #a5a5a5;
  }

  @media only screen and (min-width: 768px) {
    width: 20rem;
    height: 20rem;
  }
`;

export default CardWrapper;
