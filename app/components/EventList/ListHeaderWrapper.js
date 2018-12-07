import styled from 'styled-components';

const ListHeaderWrapper = styled.div`
  background-color: #161616;
  display: flex;
  h1 {
    font-size: 7rem;
    color: #fff;
    margin: 0;
  }
  @media screen and (max-width: 80rem) {
    h1 {
      font-size: 6rem;
      color: red;
    }
  }
  @media screen and (max-width: 60rem) {
    h1 {
      font-size: 5rem;
      color: blue;
    }
  }
  @media screen and (max-width: 40rem) {
    h1 {
      font-size: 4rem;
      color: green;
    }
  }
  @media screen and (max-width: 20rem) {
    h1 {
      font-size: 3rem;
      color: yellow;
    }
  }
`;

export default ListHeaderWrapper;
