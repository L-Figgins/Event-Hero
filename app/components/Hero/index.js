import React from 'react';
import HeroBG from './HeroBG';
import Grid from '../MuiGrid';

/* eslint-disable react/prefer-stateless-function */
const Hero = props => (
  <Grid item xs={12}>
    <HeroBG {...props} />
  </Grid>
);

Hero.propTypes = {};

export default Hero;
