/**
 *
 * Album
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAlbum from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class Album extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Album</title>
          <meta name="description" content="Description of Album" />
        </Helmet>
      </div>
    );
  }
}

Album.propTypes = {
  // dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  album: makeSelectAlbum(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'album', reducer });
const withSaga = injectSaga({ key: 'album', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Album);
