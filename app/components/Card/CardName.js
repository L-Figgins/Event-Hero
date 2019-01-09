import styled from 'styled-components';

const CardName = styled.div`
  h2 {
    font-size: 2.25rem;
    text-transform: capitalize;
  }
  h3 {
    font-size: 0.75rem;
    line-height: 0.5rem;
  }

  @media screen and (max-width: 80rem) {
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 0.75rem;
    }
  }
  @media screen and (max-width: 60rem) {
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 0.5rem;
    }
  }
  @media screen and (max-width: 40rem) {
    h2 {
      font-size: 0.75rem;
    }
    h3 {
      font-size: 0.5rem;
    }
  }
  @media screen and (max-width: 20rem) {
    h2 {
      font-size: 0.5rem;
      color: blue;
    }
    h3 {
      font-size: 0.25rem;
      color: red;
    }
  }
`;

export default CardName;
