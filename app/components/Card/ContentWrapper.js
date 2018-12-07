import styled from 'styled-components';

const ContentWrapper = styled.div`
  font-family: 'Muli', sans-serif;
  position: absolute;
  top: 60%;
  left: 10%;

  @media only screen and (max-width: 540px) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
      margin-top: -1rem;
    }
  }
`;

export default ContentWrapper;
