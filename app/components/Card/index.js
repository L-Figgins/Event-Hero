/**
 *
 * Card
 *
 */
import React from 'react';
import PropTypes from 'prop-types';

import H2 from 'components/H2';
// import Date from 'components/Date'; // REDO COMPONENT TO HANDLE UNIVERSAL DATE STRING

import CardIMG from './CardIMG';
import CardWrapper from './CardWrapper';
import ContentWrapper from './ContentWrapper';

const Card = ({ id, name, cover, handleClick }) => (
  <CardWrapper id={id} onClick={handleClick}>
    <CardIMG src={cover.source} alt="Card BG Alt Text Here" />
    {/* <Date {...date} /> */}
    <ContentWrapper>
      <H2>{name}</H2>
      {/* <P>{message.artistGenre} </P> */}
    </ContentWrapper>
  </CardWrapper>
);

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  cover: PropTypes.object,
  handleClick: PropTypes.func,
};

export default Card;
