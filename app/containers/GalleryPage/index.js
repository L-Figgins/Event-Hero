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
import P from '../../components/P';
import GalleryTitle from './GalleryTitle';
import GalleryDescription from './GalleryDescription';

import makeSelectGallery from './selectors';
import reducer from './reducer';
import saga from './saga';

import events from '../../images/BG/gallery-HH.jpg';

const GalleryWrapper = styled.div`
  background-color: rgb(22, 22, 22);
`;

const AlbumWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(22, 22, 22);
  padding-top: 2rem;
  padding-bottom: 2rem;
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
                  <H3>DEC. 2018</H3>
                </GalleryTitle>
              </Grid>
              <Grid item xs={1} />
            </Row>

            <Row>
              <Grid item xs={12}>
                <AlbumWrapper>GALLERY PICS HERE </AlbumWrapper>
              </Grid>
            </Row>

            <Row>
              <Grid item xs={1} />
              <Grid item xs={10}>
                <GalleryDescription>
                  <P>
                    Nam sit amet est nibh. Donec suscipit nunc quam, sed gravida
                    metus facilisis id. Integer ac dictum libero. Duis ut ipsum
                    tortor. Nam sit amet est nibh. Donec suscipit nunc quam, sed
                    gravida metus facilisis id. Integer ac dictum libero. Duis
                    ut ipsum tortor. Nam sit amet est nibh. Donec suscipit nunc
                    quam, sed gravida metus facilisis id. Integer ac dictum
                    libero. Duis ut ipsum tortor. Nam sit amet est nibh. Donec
                    suscipit nunc quam, sed gravida metus facilisis id. Integer
                    ac dictum libero. Duis ut ipsum tortor. Nam sit amet est
                    nibh. Donec suscipit nunc quam, sed gravida metus facilisis
                    id. Integer ac dictum libero. Duis ut ipsum tortor. Nam sit
                    amet est nibh. Donec suscipit nunc quam, sed gravida metus
                    facilisis id. ut ipsum tortor.
                  </P>
                </GalleryDescription>
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
