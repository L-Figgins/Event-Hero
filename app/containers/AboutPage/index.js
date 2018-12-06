/**
 *
 * About
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Nav from 'components/Nav';
import Hero from 'components/Hero';
import Grid from 'components/MuiGrid';
import Row from 'components/Row';

const About = props => {
  const { redirect } = props;

  return (
    <div>
      <Grid container spacing={0}>
        <Row>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Nav redirect={redirect} />
          </Grid>
          <Grid item xs={1} />
        </Row>
      </Grid>
      <Hero />
    </div>
  );
};

About.propTypes = {
  redirect: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    redirect: url => dispatch(push(url)),
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(About);
