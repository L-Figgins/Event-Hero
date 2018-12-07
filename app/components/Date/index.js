/**
 *
 * Date
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Day = styled.div`
  font-size: 1.5em;
  padding-left: O.25em;
  padding-right: 0.25em;
`;

const Month = styled.div`
  font-size: 1.5em;
  padding-left: O.25em;
  padding-right: 0.25em;
`;
const Weekday = styled.div`
  font-size: 1.5em;
  padding-left: O.25em;
  padding-right: 0.25em;
`;

const DateWrapper = styled.div`
  position: absolute;
  display: inline-flex;
  top: 10%;
  left: 10%;
`;

function Date({ day, month, weekday }) {
  return (
    <DateWrapper>
      <Weekday>{weekday}</Weekday>
      <Month>{month}</Month>
      <Day>{day}</Day>
    </DateWrapper>
  );
}

Date.propTypes = {
  day: PropTypes.string,
  month: PropTypes.string,
  weekday: PropTypes.string,
};

export default Date;
