import React from 'react';
import Card from '../Card';
import Wrapper from './Wrapper';

const EventList = ({ events, dispatch }) => {
  const cards = events.map(event => <Card {...event} dispatch={dispatch} />);

  const content = <Wrapper>{cards}</Wrapper>;

  return content;
};

export default EventList;
