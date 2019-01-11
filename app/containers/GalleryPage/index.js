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
import { Flex, Text, Box } from 'rebass';

// Dependencies

// Components
import Nav from 'components/Nav';
import Hero from 'components/Hero';
import LoadingIndicator from 'components/LoadingIndicator';
import { loadAlbums } from './actions';

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
import photoIconImage from '../../images/Icons/iconfinder_32_171485.png';

const PhotoCount = styled.div`
  text-align: right;
  padding-right: 1.5rem;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const PhotoIcon = styled.div`
  background-image: url(${props => props.img});
  background-size: contain;
  height: 1.5rem;
  width: 1.5rem;
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
        <AlbumDate>{formattedDate}</AlbumDate>

        <Flex width={1} flexDirection="row">
          <Box width={{ xs: 10 / 12, lg: 10 / 12 }}>
            <AlbumName>{album.name}</AlbumName>
          </Box>
          <Box justifySelf="flex-end" width={{ xs: 1 / 12, lg: 2 / 12 }}>
            <PhotoIcon img={photoIconImage} />
            <PhotoCount>5</PhotoCount>
          </Box>
        </Flex>
      </AlbumThumbnail>
    );
  });

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
      <React.Fragment>
        <Helmet>
          <title>Gallery</title>
          <meta
            name="description"
            content="A Gallery Of Our Events, Live Populated By Our Facebook Page."
          />
        </Helmet>

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
          <Box width={{ xs: 10 / 12 }}>
            <Text p={{ xs: '5rem', lg: '1rem' }} color="#928f8a">
              Check out photos and videos from our recent events. The Gallery
              page hosts our Facebook albums which are updated daily with bands
              and artists that have attended and played our venue. For more
              information about these photos view the individual gallery or
              visit our contact page and Faqebook for more information.
            </Text>
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
