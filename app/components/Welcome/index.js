import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import H2 from 'components/H2';
import H3 from 'components/H3';
// import P from 'components/P';
import { Flex } from 'rebass';
import TestBox from 'components/TestBox';
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
      <Flex flexWrap="wrap">
        <TestBox width={{ xs: 1 / 12 }} />
        <TestBox width={{ xs: 10 / 12 }}>
          <WelcomeTitle>
            <H1>Welcome</H1>
          </WelcomeTitle>
        </TestBox>
        <TestBox width={{ xs: 1 / 12 }} />

        <Flex width={1} py="2rem">
          <TestBox width={{ xs: 1 / 12 }} />
          <TestBox width={{ xs: 2 / 12, lg: 1 / 12 }}>
            <Vr />
          </TestBox>
          <TestBox width={{ xs: 8 / 12, lg: 8 / 12 }}>
            <BiographyWrapper>
              <WelcomeLocation>
                <H2>The Honey Hive</H2>
                <H3>San Francisco, CA</H3>
              </WelcomeLocation>
              <WelcomeDescription>
                <FormattedMessage {...messages.description} />
              </WelcomeDescription>
            </BiographyWrapper>
          </TestBox>
          <TestBox width={{ xs: 1 / 12 }} />
          <TestBox width={{ xs: 1 / 12 }} />
        </Flex>
      </Flex>
    </Wrapper>
  );
}

Welcome.propTypes = {};

export default Welcome;
