import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import P from 'components/P';
import messages from './messages';
import WelcomeTitle from './WelcomeTitle';
import WelcomeDescription from './WelcomeDescription';
import WelcomeLocation from './WelcomeLocation';
import Wrapper from './Wrapper';
import Grid from '../MuiGrid';
import Spacer from '../Spacer';
import Vr from './vr';

const TempItemStyle = styled.div`
  border: 1px solid red;
`;

const VenueBioWrapper = styled.div`
  margin-left: 7.5%;
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
          <Spacer xs={1}>
            <TempItemStyle> </TempItemStyle>
          </Spacer>
          <Grid item xs={10}>
            <TempItemStyle>
              <FormattedMessage {...messages.title} />
            </TempItemStyle>
          </Grid>
          <Spacer xs={1}>
            <TempItemStyle> </TempItemStyle>
          </Spacer>
        </WelcomeTitle>
        <WelcomeLocation>
          <Grid item xs={1}>
            <TempItemStyle>col 1</TempItemStyle>
          </Grid>
          <Grid item xs={5}>
            <TempItemStyle>
              <Temp>
                <Vr />
                <VenueBioWrapper>
                  <H1>The Honey Hive</H1>
                  <P>San Francisco, CA</P>
                  <WelcomeDescription>
                    <FormattedMessage {...messages.description} />
                  </WelcomeDescription>
                </VenueBioWrapper>
              </Temp>
            </TempItemStyle>
          </Grid>
          <Grid item xs={5}>
            <TempItemStyle>col 5</TempItemStyle>
          </Grid>
          <Grid item xs={1}>
            <TempItemStyle>col 1</TempItemStyle>
          </Grid>
        </WelcomeLocation>
      </Grid>
    </Wrapper>
  );
}

Welcome.propTypes = {};

export default Welcome;
