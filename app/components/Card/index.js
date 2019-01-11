/* eslint-disable */
/**
 *
 * Card
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import date from 'date-and-time';

import H2 from 'components/H2';
import H3 from 'components/H3';
// import Date from 'components/Date'; // REDO COMPONENT TO HANDLE UNIVERSAL DATE STRING

import CardIMG from './CardIMG';
import CardWrapper from './CardWrapper';
import ContentWrapper from './ContentWrapper';
import CardName from './CardName';

const Card = ({ id, name, cover, start_time, handleClick }) => {
  const x = new Date(start_time);
  console.log('Start_Time', start_time);
  const formatedString = start_time.replace('T', ' ');
  console.log('Formated String', formatedString);

  return (
    <CardWrapper id={id} onClick={handleClick}>
      <CardIMG src={cover.source} alt="Card BG Alt Text Here" />

      <ContentWrapper>
        <CardName>
          <H2>{name}</H2>
        </CardName>
        <CardName>
          <H3>{date.format(x, 'ddd MMM DD YYYY')}</H3>
        </CardName>
        <CardName>
          <H3>{date.format(x, 'hh:mm A')}</H3>
        </CardName>
      </ContentWrapper>
    </CardWrapper>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  cover: PropTypes.object,
  handleClick: PropTypes.func,
  start_time: PropTypes.string,
};

export default Card;
