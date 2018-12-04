import React from 'react';
import Card from '../Card';
import CardHeader from './CardHeader';
import Grid from '../MuiGrid';
import Spacer from '../Spacer';
import ListHeaderWrapper from './ListHeaderWrapper';
import H1 from '../H1';

const EventList = ({ events, handleClick }) => {
  const cards = events.map(event => (
    <Card key={event.id} {...event} handleClick={handleClick} />
  ));

  const content = (
    <div>
      <ListHeaderWrapper>
        <Spacer xs={1} />
        <Grid item xs={10}>
          <H1>Upcoming Events</H1>
        </Grid>
        <Spacer xs={1} />
      </ListHeaderWrapper>
      <CardHeader>
        <Grid item xs={1} />
        <Grid item xs={10}>
          {cards}
        </Grid>
        <Grid item xs={1} />
      </CardHeader>
    </div>
  );

  return content;
};

export default EventList;
