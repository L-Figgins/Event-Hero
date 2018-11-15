import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import P from 'components/P';
import Logo from 'components/Logo';
import messages from './messages';
import WelcomeTitle from './WelcomeTitle';
import WelcomeDescription from './WelcomeDescription';
import WelcomeLocation from './WelcomeLocation';
import Wrapper from './Wrapper';
import Grid from '../../components/MuiGrid';

const TempItemStyle = styled.div`
  border: 1px solid red;
`;

function Welcome() {
  return (
    <div>
      <Wrapper>
        <WelcomeTitle>
          <FormattedMessage {...messages.title} />
        </WelcomeTitle>
        <WelcomeLocation>
          <Grid item xs={2}>
            <TempItemStyle>col 3</TempItemStyle>
          </Grid>
          <Grid item xs={4}>
            <TempItemStyle>col 3</TempItemStyle>
            <Logo />
          </Grid>
          <Grid item xs={4}>
            <TempItemStyle>col 3</TempItemStyle>
            <H1>The Honey Hive</H1>
            <P>San Francisco, CA</P>
            <WelcomeDescription>
              <FormattedMessage {...messages.description} />
            </WelcomeDescription>
          </Grid>
          <Grid item xs={2}>
            <TempItemStyle>col 3</TempItemStyle>
          </Grid>
        </WelcomeLocation>
      </Wrapper>
    </div>
  );
}

Welcome.propTypes = {};

export default Welcome;
