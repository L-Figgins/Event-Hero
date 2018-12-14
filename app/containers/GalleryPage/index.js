/**
 *
 * Gallery
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'connected-react-router';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Nav from 'components/Nav';
import Hero from 'components/Hero';
import Grid from 'components/MuiGrid';
import Row from 'components/Row';
import styled from 'styled-components';
import H1 from '../../components/H1';
import H3 from '../../components/H3';

import makeSelectGallery from './selectors';
import reducer from './reducer';
import saga from './saga';

import events from '../../images/BG/gallery-HH.jpg';

const GalleryWrapper = styled.div`
  background-color: rgb(22, 22, 22);
`;

const GalleryTitle = styled.div`
  h1 {
    font-size: 7rem;
    margin: 0;
    color: #fff;
  }
  @media screen and (max-width: 80rem) {
    h1 {
      font-size: 6rem;
      color: red;
    }
  }
  @media screen and (max-width: 60rem) {
    h1 {
      font-size: 5rem;
      color: blue;
    }
  }
  @media screen and (max-width: 40rem) {
    h1 {
      font-size: 4rem;
      color: green;
    }
  }
  @media screen and (max-width: 20rem) {
    h1 {
      font-size: 3rem;
      color: yellow;
    }
  }
`;

/* eslint-disable react/prefer-stateless-function */
export class Gallery extends React.PureComponent {
  render() {
    const redirect = { redirect };
    return (
      <div>
        <Helmet>
          <title>Gallery</title>
          <meta name="description" content="Description of Gallery" />
        </Helmet>
        <Grid container spacing={0}>
          <GalleryWrapper>
            <Row>
              <Hero img={events}>
                <Grid item xs={1} />
                <Grid item xs={10}>
                  <Nav redirect={redirect} />
                </Grid>
                <Grid item xs={1} />
              </Hero>
            </Row>
            <Row>
              <Grid item xs={1} />
              <Grid item xs={10}>
                <GalleryTitle>
                  <H1>Gallery</H1>
                  <H3>Dec. 2018</H3>
                </GalleryTitle>
              </Grid>
              <Grid item xs={1} />
            </Row>
          </GalleryWrapper>
        </Grid>
      </div>
    );
  }
}

Gallery.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  gallery: makeSelectGallery(),
});

function mapDispatchToProps(dispatch) {
  return {
    redirect: url => dispatch(push(url)),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'gallery', reducer });
const withSaga = injectSaga({ key: 'gallery', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Gallery);
