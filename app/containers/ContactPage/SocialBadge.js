import styled from 'styled-components';

const SocialBadge = styled.div`
  color: #928f8a;
  border: 1px solid #928f8a;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.18);
  transition: 0.5s ease;

  &:hover {
    box-shadow: 0px 15px 0px 0px rgba(0, 0, 0, 0.5);
    transition: 0.5s ease;
    border: 1px solid #ffe7ae;
  }
  img {
    padding: 2rem;
  }

  h1 {
    font-size: 0.75rem;
  }

  @media screen and (max-width: 80rem) {
    h1 {
      font-size: 0.65rem;
    }
  }
  @media screen and (max-width: 70rem) {
    h1 {
      display: none;
    }
  }
  @media screen and (max-width: 60rem) {
    h1 {
      display: none;
    }
  }
  @media screen and (max-width: 40rem) {
    h1 {
      display: none;
    }
  }
  @media screen and (max-width: 20rem) {
    h1 {
      display: none;
    }
  }
`;

export default SocialBadge;
