/**
 *
 * Gallery
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectGallery from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Nav from '../../components/Nav';
import Hero from '../../components/Hero';

/* eslint-disable react/prefer-stateless-function */
export class Gallery extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Gallery</title>
          <meta name="description" content="Description of Gallery" />
        </Helmet>
        <Nav />
        <Hero />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Gallery.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  gallery: makeSelectGallery(),
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

const withReducer = injectReducer({ key: 'gallery', reducer });
const withSaga = injectSaga({ key: 'gallery', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Gallery);
