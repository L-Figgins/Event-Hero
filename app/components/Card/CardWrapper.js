import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;
  background: #1e1e1e;
  margin: 0.75rem;
  text-align: left;
  border-radius: 0.5rem;
  width: 35rem;
  height: 25rem;

  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.5);
  transition: ease 0.25s;
  &:hover {
    transition: ease 0.25s;
    box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.5);
  }
  &:active {
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.8);
    opacity: 0.5;
  }

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
