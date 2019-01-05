import styled from 'styled-components';

export const ArtistName = styled.div`
  font-size: 7em;
  font-weight: bold;
  color: #fff;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 80rem) {
    font-size: 7rem;
    line-height: 7.5rem;
  }
  @media screen and (max-width: 60rem) {
    font-size: 6rem;
    line-height: 5.5rem;
  }
  @media screen and (max-width: 40rem) {
    font-size: 5rem;
    line-height: 4.5rem;
  }
  @media screen and (max-width: 20rem) {
    font-size: 3rem;

    line-height: 3.5rem;
  }
`;

export const Tag = styled.div`
  font-size: 1.25em;
  font-weight: bold;
  color: #ffe7ae;

  padding-top: 4rem;
`;
export const ArtistGenre = styled.div`
  font-size: 1em;
  color: #fff;
  font-weight: bold;
`;
export const ArtistBio = styled.p`
  font-size: 0.9rem;
  line-height: 1.75rem;
  color: #928f8a;
`;

export const EventDate = styled.div`
  font-size: 1em;
  color: #fff;
  font-weight: bold;
`;

// TODO RENAME THIS
export const SubTitle = styled.div``;
