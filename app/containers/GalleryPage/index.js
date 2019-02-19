/** ***********
 *
 * Gallery
 *
 ************ */

// React / React Router
import React from 'react';
import PropTypes from 'prop-types';
import date from 'date-and-time';
import styled from 'styled-components';

import { push } from 'connected-react-router';
import { Helmet } from 'react-helmet';

// Redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';

// Rebass
import { Flex, Box } from 'rebass';

// Dependencies

// Components
import Nav from 'components/Nav';
import Hero from 'components/Hero';
import LoadingIndicator from 'components/LoadingIndicator';
import Hide from 'hidden-styled';
import P from '../../components/P';
import { loadAlbums } from './actions';
import HomeButton from '../../components/HomeButton';

import H1 from '../../components/H1';
import GalleryTitle from './GalleryTitle';
import Footer from '../../components/Footer';
import AlbumsWrapper from './AlbumsWrapper';
import AlbumName from './AlbumName';
import AlbumDate from './AlbumDate';
import AlbumThumbnail from './AlbumThumbnail';

import reducer from './reducer';
import saga from './saga';
import {
  makeAlbumsSelector,
  makeErrorSelector,
  makeLoadingSelector,
} from './selectors';

// Imported Media
import bgImg from '../../images/BG/gallery-HH.jpg';
import photoIconImage from '../../images/Icons/photo.png';
import GalleryDescription from './GalleryDescription';

const PhotoCount = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: right;
`;

const PhotoIcon = styled.img`
  padding: 1rem;
  position: relative;
  top: 0;
  right: 0;
  background-image: url(${props => props.img});
  background-size: contain;
  background-color: #fff;
  color: #fff;
  width: 3rem;
  height: 3rem;
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Overlay = styled.div`
  background: #141414;
  opacity: 1;
  width: 100%;
  height: auto;
`;

const AlbumList = ({ albums, handleClick }) => {
  const cards = albums.map(album => {
    console.log(album.name.toLowerCase().trim());
    console.log('hello');
    if (
      album.name.toLowerCase().trim() === 'cover photos' ||
      album.name.toLowerCase().trim() === 'profile pictures'
    ) {
      return null;
    }

    let d;
    let formattedDate = '';
    if (album.backedated_time) {
      const temp = album.backedated_time.split('T')[0].trim();
      console.log(temp);
      d = new Date(temp);
      console.log(d);
      formattedDate = date.format(d, 'MMM DD YYYY');
    } else if (album.created_time) {
      const temp = album.created_time.split('T')[0].trim();
      console.log(temp);
      d = new Date(temp);
      console.log(d);
      formattedDate = date.format(d, 'MMM DD YYYY');
    } else {
      console.log('Errom in Album List');
    }

    return (
      <AlbumThumbnail onClick={handleClick} key={album.id} {...album}>
        <Flex flexDirection="row">
          <Box width={{ xs: 6 / 12 }}>
            <AlbumName>{album.name}</AlbumName>
            <AlbumDate>{formattedDate}</AlbumDate>
          </Box>
          <Box width={{ xs: 6 / 12 }}>
            <PhotoContainer>
              <PhotoIcon img={photoIconImage} />
              <PhotoCount>5 Photos</PhotoCount>
            </PhotoContainer>
          </Box>
        </Flex>
      </AlbumThumbnail>
    );
  });

  const content = (
    <React.Fragment>
      <Overlay>{cards}</Overlay>
    </React.Fragment>
  );

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
      <React.Fragment>
        <Helmet>
          <title>Gallery</title>
          <meta
            name="description"
            content="A Gallery Of Our Events, Live Populated By Our Facebook Page."
          />
        </Helmet>

        <Hide md lg>
          <HomeButton redirect={redirect} />
        </Hide>

        <Hero img={bgImg}>
          <Flex bg="#141414" flexWrap="wrap">
            <Box width={{ xs: 1 }}>
              <Nav redirect={redirect} />
            </Box>
          </Flex>
        </Hero>

        <Flex bg="#141414">
          <Box width={{ xs: 1 / 12 }} />
          <Box width={{ xs: 10 / 12 }}>
            <GalleryTitle>
              <H1>Gallery</H1>
            </GalleryTitle>
          </Box>
          <Box width={{ xs: 1 / 12 }} />
        </Flex>

        <Flex bg="#141414">
          <Box width={{ xs: 1 / 12 }} />
          <Box color="#928f8a" width={{ xs: 10 / 12 }}>
            <GalleryDescription>
              <P>
                Nam sit amet est nibh. Donec suscipit nunc quam, sed gravida
                metus facilisis id. Integer ac dictum libero. Duis ut ipsum
                tortor. Nam sit amet est nibh. Donec suscipit nunc quam, sed
                gravida metus facilisis id. Integer ac dictum libero. Duis ut
                ipsum tortor. Nam sit amet est nibh. Donec suscipit nunc quam,
                sed gravida metus facilisis id. Integer ac dictum libero. Duis
                ut ipsum tortor. Nam sit amet est nibh. Donec suscipit nunc
                quam, sed gravida metus facilisis id. Integer ac dictum libero.
                Duis ut ipsum tortor. Nam sit amet est nibh. Donec suscipit nunc
                quam, sed gravida metus facilisis id. Integer ac dictum libero.
                Duis ut ipsum tortor. Nam sit amet est nibh. Donec suscipit nunc
                quam, sed gravida metus facilisis id. ut ipsum tortor.
              </P>
            </GalleryDescription>
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

        <Footer />
      </React.Fragment>
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
