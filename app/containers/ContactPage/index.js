/**
 *
 * Contact
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { compose } from 'redux';
import styled from 'styled-components';

import Nav from 'components/Nav';
import Hero from 'components/Hero';
import Grid from 'components/MuiGrid';
import Row from 'components/Row';
import H1 from 'components/H1';
import H3 from 'components/H3';
import P from 'components/P';
import Footer from 'components/Footer';
import ContactTitle from './ContactTitle';
import ContactDescription from './ContactDescription';
// import ContactImg from './ContactImg';

import contact from '../../images/BG/map.jpg';
// import fb from '../../images/Social/facebook.png';
// import twtr from '../../images/Social/twitter.png';
// import web from '../../images/Social/website.png';

const ContentWrapper = styled.div`
  background-color: rgb(20, 20, 20);
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Contact = props => {
  const { redirect } = props;

  return (
    <div>
      <Grid container spacing={0}>
        <Row>
          <Hero img={contact}>
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
              <ContactTitle>
                <H1>Contact</H1>
              </ContactTitle>
              <ContactDescription>
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
              </ContactDescription>
            </Grid>
            <Grid item xs={1} />
          </Row>
        </ContentWrapper>
        <ContentWrapper>
          <Row>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <ContactTitle>
                <H3>Find Us Online</H3>
              </ContactTitle>
              {/* <ContactImg src={fb} />
                <ContactImg src={twtr} />
                <ContactImg src={web} /> */}
            </Grid>
            <Grid item xs={1} />
          </Row>
        </ContentWrapper>
      </Grid>

      <Footer />
    </div>
  );
};

Contact.propTypes = {
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

export default compose(withConnect)(Contact);
