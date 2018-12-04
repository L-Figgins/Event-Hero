import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import H2 from 'components/H2';
import H3 from 'components/H3';
import P from 'components/P';
import H1 from '../H1';
import messages from './messages';
import WelcomeTitle from './WelcomeTitle';
import WelcomeDescription from './WelcomeDescription';
import WelcomeLocation from './WelcomeLocation';
import Grid from '../MuiGrid';
import Spacer from '../Spacer';
import Vr from './vr';
import Wrapper from './Wrapper';

const VenueBioWrapper = styled.div`
  margin-left: 5%;
`;

const Temp = styled.div`
  display: flex;
  flex-direction: row;
`;

function Welcome() {
  return (
    <Wrapper>
      <Grid item xs={12}>
        <WelcomeTitle>
          <Spacer xs={1} />
          <Grid item xs={10}>
            <H1>Welcome</H1>
            {/* <FormattedMessage {...messages.title} /> */}
          </Grid>
          <Spacer xs={1} />
        </WelcomeTitle>
        <WelcomeLocation>
          <Spacer xs={1} />
          <Grid item xs={1}>
            <Vr />
          </Grid>
          <Grid item xs={8} md={5}>
            <Temp>
              <VenueBioWrapper>
                <H2>The Honey Hive</H2>
                <H3>San Francisco, CA</H3>
                <WelcomeDescription>
                  <P>
                    <FormattedMessage {...messages.description} />
                  </P>
                </WelcomeDescription>
              </VenueBioWrapper>
            </Temp>
          </Grid>
          <Grid item xs={1} md={4} />
          <Grid item xs={1} />
        </WelcomeLocation>
      </Grid>
    </Wrapper>
  );
}

Welcome.propTypes = {};

export default Welcome;
