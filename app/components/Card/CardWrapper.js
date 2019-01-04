import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;
  background: #1e1e1e;
  box-shadow: 0px 10px 45px 0px rgba(0, 0, 0, 0.5);
  margin: 0.75rem;
  text-align: left;
  border-radius: 0.8rem;
  width: 35rem;
  height: 25rem;

  h1,
  h2,
  h3 {
    color: #fff;
  }
  p {
    color: #a5a5a5;
  }

  @media only screen and (max-width: 540px) {
    border: 1px solid green;
    width: 100%;
    height: 10%;
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

export default CardWrapper;
