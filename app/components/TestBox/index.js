/**
 *
 * TestBox
 *
 */

import React from 'react';
import { Box } from 'rebass';

import styled from 'styled-components';

const Test = styled(Box)`
  border: 1px solid red;
`;

const TestBox = props => <Test {...props} />;

export default TestBox;
