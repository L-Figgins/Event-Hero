/**
 *
 * Card
 *
 */
import { push } from 'connected-react-router';
import React from 'react';
import PropTypes from 'prop-types';

import H2 from 'components/H2';
import P from 'components/P';
import Date from 'components/Date';

import IMG from './CardIMG';
import CardWrapper from './CardWrapper';
import ContentWrapper from './ContentWrapper';
import artistBG from '../../images/BG/artist.jpg';

const Card = ({ message, date, dispatch }) => {
  const HandleEventClick = () => dispatch(push('/fake'));
  return (
    <CardWrapper onClick={HandleEventClick}>
      <IMG src={artistBG} alt="Card BG Alt Text Here" />
      <Date {...date} />
      <ContentWrapper>
        <H2>{message.cardArtist}</H2>
        <P>{message.cardGenre} </P>
      </ContentWrapper>
    </CardWrapper>
  );
};

Card.propTypes = {
  message: PropTypes.object,
  date: PropTypes.object,
};

export default Card;
