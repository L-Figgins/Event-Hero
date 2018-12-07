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
import ContactImg from './ContactImg';

import contact from '../../images/BG/map.jpg';
import fb from '../../images/Social/fb.png';
import twtr from '../../images/Social/twtr.png';
import web from '../../images/Social/web.png';

const ContentWrapper = styled.div`
  background-color: rgb(20, 20, 20);
  padding-top: 2rem;
  padding-bottom: 2rem;
`;
const ContactWrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SocialBadge = styled.div`
  color: #928f8a;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.18);
  transition: 0.5s ease;

  &:hover {
    box-shadow: 0px 15px 0px 0px rgba(0, 0, 0, 0.5);
    transition: 0.5s ease;
    border: 1px solid rgb(0, 0, 0, 0.5);
  }
  img {
    padding: 2rem;
  }

  h1 {
    font-size: 0.75rem;
  }
  @media screen and (max-width: 80rem) {
    h1 {
      font-size: 0.65rem;
    }
  }
  @media screen and (max-width: 60rem) {
    h1 {
      display: none;
    }
  }
  @media screen and (max-width: 40rem) {
    h1 {
      display: none;
    }
  }
  @media screen and (max-width: 20rem) {
    h1 {
      display: none;
    }
  }
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
              <Grid container spacing={0}>
                <ContactWrapper>
                  <Grid item xs={4}>
                    <SocialBadge>
                      <ContactImg src={fb} />
                      <H1>Facebook.com/HoneyHiveGallery</H1>
                    </SocialBadge>
                  </Grid>
                  <Grid item xs={4}>
                    <SocialBadge>
                      <ContactImg src={twtr} />
                      <H1>Twitter/@HoneyHive</H1>
                    </SocialBadge>
                  </Grid>
                  <Grid item xs={4}>
                    <SocialBadge>
                      <ContactImg src={web} />
                      <H1>Website/www.HoneyHiveGallery.com</H1>
                    </SocialBadge>
                  </Grid>
                </ContactWrapper>
              </Grid>
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
