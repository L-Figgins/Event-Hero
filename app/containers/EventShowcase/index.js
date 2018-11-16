/**
 *
 * EventShowcase
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEventShowcase from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadEventById } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class EventShowcase extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>EventShowcase</title>
          <meta name="description" content="Description of EventShowcase" />
        </Helmet>
      </div>
    );
  }
}

EventShowcase.propTypes = {};

const mapStateToProps = createStructuredSelector({
  eventShowcase: makeSelectEventShowcase(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadEventById: dispatch(loadEventById('1')),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'eventShowcase', reducer });
const withSaga = injectSaga({ key: 'eventShowcase', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EventShowcase);
