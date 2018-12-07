import styled from 'styled-components';

const CardWrapper = styled.div`
  background: #1e1e1e;
  box-shadow: 0px 10px 45px 0px rgba(0, 0, 0, 0.5);
  margin: 0.75rem;
  position: relative;
  text-align: left;
  border-radius: 1rem;
  border: 1px solid purple;
  width: 15rem;
  height: 15rem;

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
