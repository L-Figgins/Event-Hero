import styled from 'styled-components';

export const ArtistName = styled.div`
  font-size: 7em;
  font-weight: bold;
  color: #fff;

  h1 {
    font-size: 7rem;
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

export const Tag = styled.div`
  font-size: 1.25em;
  font-weight: bold;
  color: #ffe7ae;
`;
export const ArtistGenre = styled.div`
  font-size: 1em;
  color: #fff;
  font-weight: bold;
  padding-right: 1em;
`;
export const ArtistBio = styled.p`
  font-size: 0.9rem;
  line-height: 1.75rem;
  color: #fff;
  width: 80;
`;

export const EventDate = styled.div`
  font-size: 1em;
  color: #fff;
  font-weight: bold;
`;

// TODO RENAME THIS
export const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
`;
