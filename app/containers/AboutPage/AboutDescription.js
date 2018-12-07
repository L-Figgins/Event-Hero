import styled from 'styled-components';

const AboutDescription = styled.div`
  font-size: 1.45rem;
  color: #928f8a;
  padding-top: 2rem;
  padding-bottom: 2rem;

  img {
    width: 100%;
    height: 70vh;
    margin-top: 2rem;
    margin-bottom: 2rem;
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

export default AboutDescription;
