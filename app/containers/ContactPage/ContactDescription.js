import styled from 'styled-components';

const ContactDescription = styled.div`
  font-size: 1.45rem;
  color: #928f8a;

  img {
    width: 100%;
    height: 70vh;
  }
  p {
    font-size: 1rem;
  }
  @media screen and (max-width: 80rem) {
    p {
      font-size: 0.95rem;
    }
  }
  @media screen and (max-width: 60rem) {
    p {
      font-size: 0.85rem;
    }
  }
  @media screen and (max-width: 40rem) {
    p {
      font-size: 0.75rem;
    }
  }
  @media screen and (max-width: 20rem) {
    p {
      font-size: 0.85rem;
    }
  }
`;

export default ContactDescription;
