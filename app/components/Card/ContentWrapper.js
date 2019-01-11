import styled from 'styled-components';

const ContentWrapper = styled.div`
  overflow-wrap: break-word;
  position: absolute;
  bottom: 10%;
  left: 10%;

  h2 {
    font-size: 1.25rem;
    text-transform: capitalize;
  }
  h3 {
    font-size: 0.75rem;
  }
  @media only screen and (max-width: 46.875rem) {
    h3 {
      font-size: 0.5rem;
    }
    h2 {
      font-size: 0.75rem;
    }
  }
`;

export default ContentWrapper;
