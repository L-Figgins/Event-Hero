import React from 'react';
import Card from '../Card';
import Wrapper from './Wrapper';

const EventList = ({ events }) => {
  const cards = events.map(event => <Card {...event} />);

  const content = <Wrapper>{cards}</Wrapper>;

  return content;
};

export default EventList;
