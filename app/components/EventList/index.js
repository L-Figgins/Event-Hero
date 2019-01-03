import React from 'react';
import { Flex } from 'rebass';
import TestBox from '../TestBox';
import Card from '../Card';
import Wrapper from './Wrapper';
// import Grid from '../MuiGrid';
// import Row from '../Row';
import H1 from '../H1';
import ListHeaderWrapper from './ListHeaderWrapper';

const EventList = ({ events, handleClick }) => {
  const cards = events.map(event => (
    <Card key={event.id} {...event} handleClick={handleClick} />
  ));

  const content = (
    <ListHeaderWrapper>
      <Flex justifyContent="center">
        <TestBox width={{ xs: 1 }}>
          <H1 fontSize="5em">Events</H1>
        </TestBox>
      </Flex>
      <Flex justifyContent="center">
        <TestBox width={{ xs: 1 }}>
          <Wrapper>{cards}</Wrapper>
        </TestBox>
      </Flex>
    </ListHeaderWrapper>
  );

  return content;
};

export default EventList;
