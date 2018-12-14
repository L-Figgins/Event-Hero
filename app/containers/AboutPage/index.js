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
import Footer from 'components/Footer';
import Grid from 'components/MuiGrid';
import Row from 'components/Row';
import H1 from 'components/H1';
import P from 'components/P';
import AboutImg from './AboutImg';
import AboutDescription from './AboutDescription';
import AboutTitle from './AboutTitle';

import about from '../../images/BG/about-HH.jpg';
import booking from '../../images/BG/booking-HH.jpg';

const ContentWrapper = styled.div`
  background-color: rgb(20, 20, 20);
  padding-top: 2rem;
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

        <ContentWrapper>
          <Row>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <AboutTitle>
                <H1>About</H1>
              </AboutTitle>
              <AboutDescription>
                <P>
                  Nam sit amet est nibh. Donec suscipit nunc quam, sed gravida
                  metus facilisis id. Integer ac dictum libero. Duis ut ipsum
                  tortor. Nam sit amet est nibh. Donec suscipit nunc quam, sed
                  gravida metus facilisis id. Integer ac dictum libero. Duis ut
                  ipsum tortor. Nam sit amet est nibh. Donec suscipit nunc quam,
                  sed gravida metus facilisis id. Integer ac dictum libero. Duis
                  ut ipsum tortor. Nam sit amet est nibh. Donec suscipit nunc
                  quam, sed gravida metus facilisis id. Integer ac dictum
                  libero. Duis ut ipsum tortor. Nam sit amet est nibh. Donec
                  suscipit nunc quam, sed gravida metus facilisis id. Integer ac
                  dictum libero. Duis ut ipsum tortor. Nam sit amet est nibh.
                  Donec suscipit nunc quam, sed gravida metus facilisis id. ut
                  ipsum tortor.
                </P>
              </AboutDescription>
            </Grid>
            <Grid item xs={1} />
          </Row>
        </ContentWrapper>
        <ContentWrapper>
          <Row>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <AboutTitle>
                <H1>Booking</H1>
              </AboutTitle>

              <AboutDescription>
                <AboutImg src={booking} />
                <P>
                  Honey Hive Booking works to ensure a smooth event and
                  performance for everyone. Although all events are different,
                  some performers require necessary items for a performance.
                  These can include artist’s fees, airfare, staging, lighting,
                  hotel accommodations and onsite production staff. Honey Hive
                  booking takes the stress off of you and handles the
                  organization of these necessary elements. As our client, Honey
                  Hive works with you to discuss the details of your event. If
                  necessary, we can provide a full service solution for a flat
                  rate.
                </P>
              </AboutDescription>
            </Grid>
            <Grid item xs={1} />
          </Row>
        </ContentWrapper>
      </Grid>

      <Footer />
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
