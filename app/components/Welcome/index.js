import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import H2 from 'components/H2';
import H3 from 'components/H3';
// import P from 'components/P';
import { Flex, Box } from 'rebass';
import H1 from '../H1';
import messages from './messages';
import WelcomeTitle from './WelcomeTitle';
import WelcomeDescription from './WelcomeDescription';
import WelcomeLocation from './WelcomeLocation';
// import Grid from '../MuiGrid';

import Vr from './vr';
import Wrapper from './Wrapper';

const BiographyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
`;

function Welcome() {
  return (
    <Wrapper>
      <Flex xs={1}>
        <WelcomeTitle>
          <Box xs={1 / 12} />
          <Box xs={10 / 12}>
            <H1>Welcome</H1>
          </Box>
          <Box xs={1 / 12} />
        </WelcomeTitle>
        <WelcomeLocation>
          <Box xs={1 / 12} />
          <Box xs={1 / 12}>
            <Vr />
          </Box>
          <Box xs={8 / 12} md={5 / 12}>
            <BiographyWrapper>
              <H2>The Honey Hive</H2>
              <H3>San Francisco, CA</H3>
              <WelcomeDescription>
                <FormattedMessage {...messages.description} />
              </WelcomeDescription>
            </BiographyWrapper>
          </Box>
          <Box xs={1 / 12} md={4 / 12} />
          <Box xs={1 / 12} />
        </WelcomeLocation>
      </Flex>
    </Wrapper>
  );
}

Welcome.propTypes = {};

export default Welcome;
