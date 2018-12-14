import styled from 'styled-components';

const GalleryDescription = styled.div`
  font-size: 1.45rem;
  color: #928f8a;
  margin-top: 2rem;
  margin-bottom: 2rem;

  p {
    font-size: 1rem;
    padding-top: 2rem;
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

export default GalleryDescription;
