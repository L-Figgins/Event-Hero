import styled from 'styled-components';

const ListHeaderWrapper = styled.div`
  h1 {
    font-size: 7rem;
    color: #fff;
    margin: 0;
  }
  @media screen and (max-width: 80rem) {
    h1 {
      font-size: 6rem;
    }
  }
  @media screen and (max-width: 60rem) {
    h1 {
      font-size: 5rem;
    }
  }
  @media screen and (max-width: 40rem) {
    h1 {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 20rem) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export default ListHeaderWrapper;
