/**
 *
 * Gallery
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Text, Box } from 'rebass';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'connected-react-router';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Nav from 'components/Nav';
import Hero from 'components/Hero';

import LoadingIndicator from 'components/LoadingIndicator';
import styled from 'styled-components';
// import TestBox from '../../components/TestBox';
import H1 from '../../components/H1';
import H3 from '../../components/H3';
import GalleryTitle from './GalleryTitle';
// import GalleryDescription from './GalleryDescription';
import Footer from '../../components/Footer';

import {
  makeAlbumsSelector,
  makeErrorSelector,
  makeLoadingSelector,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import bgImg from '../../images/BG/gallery-HH.jpg';
import { loadAlbums } from './actions';

const AlbumsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: rgb(22, 22, 22);
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin: 0;
  border: 1px solid red;
`;

const AlbumThumbnail = styled.div`
  height: 25rem;
  width: 25rem;
  border: 1px solid #928f8a;
  background-image: url(${props => props.cover_photo.source});
  background-size: cover;
  background-position: center center;
  margin: 1rem;
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.5);
  transition: ease 0.25s;
  &:hover {
    transition: ease 0.25s;
    box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.5);
  }
  &:active {
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.8);
    opacity: 0.5;
  }
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

        <Hero img={bgImg}>
          <Flex flexWrap="wrap">
            <Box width={{ xs: 1 / 12 }} />
            <Box width={{ xs: 10 / 12 }}>
              <Nav redirect={redirect} />
            </Box>
            <Box width={{ xs: 1 / 12 }} />
          </Flex>
        </Hero>

        <Flex bg="#141414">
          <Box width={{ xs: 1 / 12 }} />
          <Box width={{ xs: 10 / 12 }}>
            <GalleryTitle>
              <H1>Gallery</H1>
              <H3>DEC. 2018</H3>
            </GalleryTitle>
          </Box>
          <Box width={{ xs: 1 / 12 }} />
        </Flex>

        <Flex flexWrap="wrap" bg="#141414">
          <Box width={{ xs: 1 / 12 }} />
          <Box width={{ xs: 10 / 12 }}>
            <AlbumsWrapper>{content}</AlbumsWrapper>
          </Box>
          <Box width={{ xs: 1 / 12 }} />
        </Flex>

        <Flex bg="#141414">
          <Box width={{ xs: 1 / 12 }} />
          <Box width={{ xs: 10 / 12 }}>
            <Text p={{ xs: '5rem', lg: '1rem' }} color="white">
              Nam sit amet est nibh. Donec susciTextit nunc quam, sed gravida
              metus facilisis id. Integer ac dictum libero. Duis ut ipsum
              tortor. Nam sit amet est nibh. Donec suscipit nunc quam, sed
              gravida metus facilisis id. Integer ac dictum libero. Duis ut
              ipsum tortor. Nam sit amet est nibh. Donec suscipit nunc quam, sed
              gravida metus facilisis id. Integer ac dictum libero. Duis ut
              ipsum tortor. Nam sit amet est nibh. Donec suscipit nunc quam, sed
              gravida metus facilisis id. Integer ac dictum libero. Duis ut
              ipsum tortor. Nam sit amet est nibh. Donec suscipit nunc quam, sed
              gravida metus facilisis id. Integer ac dictum libero. Duis ut
              ipsum tortor. Nam sit amet est nibh. Donec suscipit nunc quam, sed
              gravida metus facilisis id. ut ipsum tortor.
            </Text>
          </Box>

          <Box width={{ xs: 1 / 12 }} />
        </Flex>

        <Footer />
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
