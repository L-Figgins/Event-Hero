import React from 'react';
import HeroBG from './HeroBG';
import Grid from '../MuiGrid';

/* eslint-disable react/prefer-stateless-function */
const Hero = props => (
  <Grid container spacing={16}>
    <Grid item xs={12}>
      <HeroBG {...props} />
    </Grid>
  </Grid>
);

Hero.propTypes = {};

export default Hero;
