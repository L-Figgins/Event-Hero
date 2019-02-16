import styled from 'styled-components';

const EventsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #141414;
  color: #fff;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 30rem) {
    justify-content: center;
  }
`;

export default EventsWrapper;
