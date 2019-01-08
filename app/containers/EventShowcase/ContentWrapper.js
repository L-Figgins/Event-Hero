import styled from 'styled-components';

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 82.25vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 2rem;

  @media screen and (max-width: 80rem) {
    h1 {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 60rem) {
    h1 {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 40rem) {
    h1 {
      font-size: 1.25rem;
    }
  }
  @media screen and (max-width: 20rem) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export default ContentWrapper;
