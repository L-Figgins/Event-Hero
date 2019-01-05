import React from 'react';
import { Flex, Box } from 'rebass';
import Card from '../Card';
import Wrapper from './Wrapper';
import H1 from '../H1';
import ListHeaderWrapper from './ListHeaderWrapper';

const EventList = ({ events, handleClick }) => {
  const cards = events.map(event => (
    <Card key={event.id} {...event} handleClick={handleClick} />
  ));

  const content = (
    <ListHeaderWrapper>
      <Flex justifyContent="center">
        <Box width={{ xs: 1 }}>
          <H1>Events</H1>
        </Box>
      </Flex>
      <Flex justifyContent="center">
        <Box width={{ xs: 1 }}>
          <Wrapper>{cards}</Wrapper>
        </Box>
      </Flex>
    </ListHeaderWrapper>
  );

  return content;
};

export default EventList;
