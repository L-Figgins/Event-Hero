import styled from 'styled-components';

const ContactTitle = styled.div`
  margin: 0;
  color: #fff;

  h1 {
    font-size: 7rem;
    margin: 0;
  }
  h3 {
    font-size: 1rem;
  }
  @media screen and (max-width: 80rem) {
    h1 {
      font-size: 6rem;
      color: red;
    }
    h3 {
      font-size: 0.85rem;
    }
  }
  @media screen and (max-width: 60rem) {
    h1 {
      font-size: 5rem;
      color: blue;
    }
    h3 {
      font-size: 0.75rem;
    }
  }
  @media screen and (max-width: 40rem) {
    h1 {
      font-size: 4rem;
      color: green;
    }
    h3 {
      font-size: 0.65rem;
    }
  }
  @media screen and (max-width: 20rem) {
    h1 {
      font-size: 3rem;
      color: yellow;
    }
    h3 {
      font-size: 0.75rem;
    }
  }
`;

export default ContactTitle;
