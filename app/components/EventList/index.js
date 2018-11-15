import React from 'react';
import Card from '../Card';
import Wrapper from './Wrapper';
import Grid from '../MuiGrid';

const EventList = ({ events }) => {
  const cards = events.map(event => <Card {...event} />);

  const content = (
    <Grid>
      <Wrapper>{cards}</Wrapper>
    </Grid>
  );

  return content;
};

export default EventList;
