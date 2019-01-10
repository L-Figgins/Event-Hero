/**
 *
 * Gallery
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
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
import LoadingIndicator from 'components/LoadingIndicator';
import styled from 'styled-components';
import H1 from '../../components/H1';
import H3 from '../../components/H3';
import P from '../../components/P';
import GalleryTitle from './GalleryTitle';
import GalleryDescription from './GalleryDescription';

import {
  makeAlbumsSelector,
  makeErrorSelector,
  makeLoadingSelector,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import bgImg from '../../images/BG/gallery-HH.jpg';
import { loadAlbums } from './actions';

const GalleryWrapper = styled.div`
  background-color: rgb(22, 22, 22);
`;

const AlbumsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: rgb(22, 22, 22);
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const AlbumThumbnail = styled.div`
  height: 450px;
  width: 450px;
  border: 1px solid green;
  background-image: url(${props => props.cover_photo.source});
  background-size: cover;
  background-position: center center;
`;

const AlbumList = ({ albums, handleClick }) => {
  const cards = albums.map(album => (
    <AlbumThumbnail onClick={handleClick} key={album.id} {...album} />
  ));

  const content = <React.Fragment>{cards}</React.Fragment>;

  return content;
};

/* eslint-disable react/prefer-stateless-function */
export class Gallery extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onAlbumClick = this.onAlbumClick.bind(this);
  }

  componentDidMount() {
    this.props.loadAlbums();
  }

  onAlbumClick(event) {
    const albumId = event.currentTarget.id;
    console.log(albumId);
    this.props.loadAlbumPage(albumId);
  }

  render() {
    let content;
    const { redirect, albums, loading, error } = this.props;

    if (error) {
      console.log(error);
      content = <div>Oh no Error</div>;
    } else if (loading) {
      content = <LoadingIndicator />;
    } else if (albums) {
      content = <AlbumList handleClick={this.onAlbumClick} albums={albums} />;
    } else {
      content = <div>Something went horribly wrong</div>;
    }

    return (
      <div>
        <Helmet>
          <title>Gallery</title>
          <meta name="description" content="Description of Gallery" />
        </Helmet>
        <Grid container spacing={0}>
          <GalleryWrapper>
            <Row>
              <Hero img={bgImg}>
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
                  <H3>JAN. 2018</H3>
                </GalleryTitle>
              </Grid>
              <Grid item xs={1} />
            </Row>

            <Row>
              <Grid item xs={1} />
              <Grid item xs={10}>
                <AlbumsWrapper>{content}</AlbumsWrapper>
              </Grid>
              <Grid item xs={1} />
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
  loadAlbums: PropTypes.func.isRequired,
  loadAlbumPage: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.any,
  albums: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  albums: makeAlbumsSelector(),
  loading: makeLoadingSelector(),
  error: makeErrorSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    redirect: url => dispatch(push(url)),
    loadAlbums: () => dispatch(loadAlbums()),
    loadAlbumPage: id => {
      const url = `/Gallery/Album?id=${id}`;
      dispatch(push(url));
    },
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
