import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import P from 'components/P';
import messages from './messages';
import WelcomeTitle from './WelcomeTitle';
import WelcomeDescription from './WelcomeDescription';
import WelcomeLocation from './WelcomeLocation';
import Grid from '../MuiGrid';
import Spacer from '../Spacer';
import Vr from './vr';

const VenueBioWrapper = styled.div`
  margin-left: 5%;
`;

const Temp = styled.div`
  display: flex;
  flex-direction: row;
`;

function Welcome() {
  return (
    // <Wrapper>
    <Grid item xs={12}>
      <WelcomeTitle>
        <Spacer xs={1} />
        <Grid item xs={10}>
          Welcome
          {/* <FormattedMessage {...messages.title} /> */}
        </Grid>
        <Spacer xs={1} />
      </WelcomeTitle>
      <WelcomeLocation>
        <Spacer xs={1} />
        <Grid item xs={1}>
          <Vr />
        </Grid>
        <Grid item xs={5}>
          <Temp>
            <VenueBioWrapper>
              <H1>The Honey Hive</H1>
              <P>San Francisco, CA</P>
              <WelcomeDescription>
                <FormattedMessage {...messages.description} />
              </WelcomeDescription>
            </VenueBioWrapper>
          </Temp>
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={1} />
      </WelcomeLocation>
    </Grid>
    // </Wrapper>
  );
}

Welcome.propTypes = {};

export default Welcome;
