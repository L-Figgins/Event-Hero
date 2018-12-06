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
import styled from 'styled-components';

import Nav from 'components/Nav';
import Hero from 'components/Hero';
import Grid from 'components/MuiGrid';
import Row from 'components/Row';
import H1 from 'components/H1';
import P from 'components/P';
import Img from 'components/Img';

import about from '../../images/BG/about.jpg';
import booking from '../../images/BG/artist.jpg';

const ContentWrapper = styled.div`
  background-color: darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
  width: 100%;
`;

const BookingWrapper = styled.div`
  background-color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
  width: 100%;
`;

const About = props => {
  const { redirect } = props;

  return (
    <div>
      <Grid container spacing={0}>
        <Row>
          <Hero img={about}>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <Nav redirect={redirect} />
            </Grid>
            <Grid item xs={1} />
          </Hero>
        </Row>

        <Row>
          <BookingWrapper>
            <H1>Booking</H1>
            <Img src={booking} />
            <P>
              Nam sit amet est nibh. Donec suscipit nunc quam, sed gravida metus
              facilisis id. Integer ac dictum libero. Duis ut ipsum tortor.
            </P>
          </BookingWrapper>
        </Row>

        <Row>
          <ContentWrapper>
            <Grid item xs={12} />
            <H1>Some Text Title</H1>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              laoreet neque id molestie vehicula. Sed aliquam vestibulum
              euismod. Suspendisse leo nibh, maximus et dui a, lobortis interdum
              ante. Nulla fermentum est ut leo tempor consequat. Integer rutrum
              nisi lacus, quis sodales enim semper sed. Nam sit amet est nibh.
              Donec suscipit nunc quam, sed gravida metus facilisis id. Integer
              ac dictum libero. Duis ut ipsum tortor.
            </P>
            <Grid />
          </ContentWrapper>
        </Row>
      </Grid>
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
