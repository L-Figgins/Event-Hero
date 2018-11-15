import React from 'react';
import styled from 'styled-components';
import HeroBG from './HeroBG';
import Grid from '../MuiGrid';

const TempItemStyle = styled.div`
  border: 1px solid red;
`;

/* eslint-disable react/prefer-stateless-function */
const Hero = props => (
  <Grid container spacing={16}>
    <Grid item xs={12}>
      <TempItemStyle>
        <HeroBG {...props} />
      </TempItemStyle>
    </Grid>
  </Grid>
);

Hero.propTypes = {};

export default Hero;
