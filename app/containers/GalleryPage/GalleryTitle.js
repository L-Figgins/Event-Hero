import styled from 'styled-components';

const GalleryTitle = styled.div`
  font-size: 7rem;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;

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

export default GalleryTitle;
