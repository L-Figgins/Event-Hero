/**
 *
 * Row
 *
 */

import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Row = props => <StyledRow {...props} />;

Row.propTypes = {};

export default Row;
