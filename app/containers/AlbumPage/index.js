/**
 *
 * AlbumPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Flex, Box } from 'rebass';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import LoadingIndicator from 'components/LoadingIndicator';
import Photos from 'components/Photos';
import styled from 'styled-components';
import Nav from '../../components/Nav';
import AlbumsWrapper from './AlbumsWrapper';
import makeSelectAlbumPage, {
  makeSelectAlbum,
  makeSelectAlbumLoading,
  makeSelectAlbumError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadAlbumById } from './actions';

const AlbumHeader = styled.div`
  display: flex;
  justify-content: center;
  background-color: #141414;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: white;
  font-size: 1.75rem;
  text-transform: uppercase;
`;

/* eslint-disable react/prefer-stateless-function */
export class AlbumPage extends React.Component {
  componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    console.log('Query ID: ', query.id);
    this.props.loadAlbum(query.id);
  }

  render() {
    const { redirect } = this.props;
    let content;
    const { album, error, loading } = this.props;
    if (album) {
      console.log(this.props.album);
      console.log(album.name);
      content = (
        <React.Fragment>
          <AlbumHeader>{album.name}</AlbumHeader>
          <Photos photos={album.photos} />
        </React.Fragment>
      );
    } else if (error) {
      console.log(error);
      content = <div>Oh no error</div>;
    } else if (loading) {
      content = <LoadingIndicator />;
    }

    return (
      <React.Fragment>
        <Helmet>
          <title>AlbumPage</title>
          <meta name="description" content="Description of AlbumPage" />
        </Helmet>

        <Flex bg="#141414" flexWrap="wrap">
          <Box width={{ xs: 1 }}>
            <Nav redirect={redirect} />
          </Box>
        </Flex>

        <Flex bg="#141414" justifyContent="center" alignItems="center">
          <Box width={{ xs: 1 / 12 }} />
          <Box width={{ xs: 10 / 12 }}>
            <AlbumsWrapper>{content}</AlbumsWrapper>
          </Box>
          <Box width={{ xs: 1 / 12 }} />
        </Flex>
      </React.Fragment>
    );
  }
}

AlbumPage.propTypes = {
  loadAlbum: PropTypes.func.isRequired,
  location: PropTypes.any,
  album: PropTypes.object,
  error: PropTypes.any,
  loading: PropTypes.bool,
  redirect: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  albumPage: makeSelectAlbumPage(),
  album: makeSelectAlbum(),
  loading: makeSelectAlbumLoading(),
  error: makeSelectAlbumError(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadAlbum: id => dispatch(loadAlbumById(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'albumPage', reducer });
const withSaga = injectSaga({ key: 'albumPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AlbumPage);
