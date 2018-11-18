import React from 'react';
import Card from '../Card';
import Wrapper from './Wrapper';
import Grid from '../MuiGrid';

const EventList = ({ events, handleClick }) => {
  const cards = events.map(event => (
    <Card key={event.id} {...event} handleClick={handleClick} />
  ));

  const content = (
    <Grid>
      <Wrapper>{cards}</Wrapper>
    </Grid>
  );

  return content;
};

export default EventList;
