/**
 *
 * EventShowcase
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import queryString from 'query-string';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEventShowcase, {
  makeSelectEvent,
  makeSelectEventShowcaseError,
  makeSelectEventShowcaseLoading,
} from './selectors';
import { makeSelectLocation } from '../App/selectors';
import reducer from './reducer';
import saga from './saga';
import { loadEventById } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class EventShowcase extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadEventById(1));
  }

  render() {
    let content;
    const error = <div>Oh no Error</div>;
    if (this.props.error) {
      content = error;
    } else {
      content = (
        <div>
          <div>{this.props.event.title}</div>
          <div>Location Pathname: {this.props.location.pathname}</div>
          <div>Location Search: {this.props.location.search}</div>
          <div>Location Hash: {this.props.location.hashs}</div>
        </div>
      );
    }

    return (
      <div>
        <Helmet>
          <title>EventShowcase</title>
          <meta name="description" content="Description of EventShowcase" />
        </Helmet>
        {content}
        <div> hello </div>
      </div>
    );
  }
}

// TODO make real prop type tests
EventShowcase.propTypes = {
  event: PropTypes.any,
  // loading: PropTypes.any,
  error: PropTypes.any,
  // eventShowcase: PropTypes.any,
  location: PropTypes.any,
  dispatch: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  eventShowcase: makeSelectEventShowcase(),
  loading: makeSelectEventShowcaseLoading(),
  error: makeSelectEventShowcaseError(),
  event: makeSelectEvent(),
  location: makeSelectLocation(),
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

const withReducer = injectReducer({ key: 'eventShowcase', reducer });
const withSaga = injectSaga({ key: 'eventShowcase', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EventShowcase);
