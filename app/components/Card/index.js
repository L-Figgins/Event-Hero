/**
 *
 * Card
 *
 */
import React from 'react';
import PropTypes from 'prop-types';

import H2 from 'components/H2';
import P from 'components/P';
import Date from 'components/Date';

import CardIMG from './CardIMG';
import CardWrapper from './CardWrapper';
import ContentWrapper from './ContentWrapper';

const Card = ({ message, date, handleClick, id, imageURL }) => (
  <CardWrapper id={id} onClick={handleClick}>
    <CardIMG src={imageURL} alt="Card BG Alt Text Here" />
    <Date {...date} />
    <ContentWrapper>
      <H2>{message.artistName}</H2>
      <P>{message.artistGenre} </P>
    </ContentWrapper>
  </CardWrapper>
);

Card.propTypes = {
  message: PropTypes.object,
  date: PropTypes.object,
};

export default Card;
