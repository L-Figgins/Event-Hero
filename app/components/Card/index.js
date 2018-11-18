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

import IMG from './CardIMG';
import CardWrapper from './CardWrapper';
import ContentWrapper from './ContentWrapper';
import artistBG from '../../images/BG/artist.jpg';

const Card = ({ message, date, handleClick, id }) => (
  <CardWrapper iD={id} onClick={handleClick}>
    <IMG src={artistBG} alt="Card BG Alt Text Here" />
    <Date {...date} />
    <ContentWrapper>
      <H2>{message.cardArtist}</H2>
      <P>{message.cardGenre} </P>
    </ContentWrapper>
  </CardWrapper>
);

Card.propTypes = {
  message: PropTypes.object,
  date: PropTypes.object,
};

export default Card;
