import React from 'react';
import Card from '../Card';
import Wrapper from './Wrapper';
import Grid from '../MuiGrid';
import H1 from '../H1';
import Spacer from '../Spacer';
import ListHeaderWrapper from './ListHeaderWrapper';

const EventList = ({ events, handleClick }) => {
  const cards = events.map(event => (
    <Card key={event.id} {...event} handleClick={handleClick} />
  ));

  const content = (
    <Grid item xs={12}>
      <ListHeaderWrapper>
        <Spacer xs={1} />
        <Grid item xs={11}>
          <H1 fontSize="5em">Upcoming Events</H1>
        </Grid>
      </ListHeaderWrapper>
      <Wrapper>{cards}</Wrapper>
    </Grid>
  );

  return content;
};

export default EventList;
