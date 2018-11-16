import React from 'react';
import Card from '../Card';
import Wrapper from './Wrapper';
import Grid from '../MuiGrid';

const EventList = ({ events, dispatch }) => {
  const cards = events.map(event => <Card {...event} dispatch={dispatch} />);

  const content = (
    <Grid>
      <Wrapper>{cards}</Wrapper>
    </Grid>
  );

  return content;
};

export default EventList;
