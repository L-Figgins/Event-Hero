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
    color: #928f8a;
  }
  @media screen and (max-width: 80rem) {
    h1 {
      font-size: 6rem;
    }
    h3 {
      font-size: 0.85rem;
    }
  }
  @media screen and (max-width: 60rem) {
    h1 {
      font-size: 5rem;
    }
    h3 {
      font-size: 0.75rem;
    }
  }
  @media screen and (max-width: 40rem) {
    h1 {
      font-size: 4rem;
    }
    h3 {
      font-size: 0.65rem;
    }
  }
  @media screen and (max-width: 20rem) {
    h1 {
      font-size: 3rem;
    }
    h3 {
      font-size: 0.75rem;
    }
  }
`;

export default ContactTitle;
