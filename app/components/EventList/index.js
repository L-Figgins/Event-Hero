import React from 'react';
import Card from '../Card';
import Wrapper from './Wrapper';
import Grid from '../MuiGrid';
import Row from '../Row';
import H1 from '../H1';
import ListHeaderWrapper from './ListHeaderWrapper';

const EventList = ({ events, handleClick }) => {
  const cards = events.map(event => (
    <Card key={event.id} {...event} handleClick={handleClick} />
  ));

  const content = (
    <Grid container spacing={0}>
      <ListHeaderWrapper>
        <Row>
          <Grid xs={1} />
          <Grid item xs={10}>
            <H1 fontSize="5em">Upcoming Events</H1>
          </Grid>
          <Grid xs={1} />
        </Row>
        <Row>
          <Grid xs={1} />
          <Grid item xs={10}>
            <Wrapper>{cards}</Wrapper>
          </Grid>
          <Grid xs={1} />
        </Row>
      </ListHeaderWrapper>
    </Grid>
  );

  return content;
};

export default EventList;
