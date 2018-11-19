/**
 *
 * EventShowcase
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
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
    // parses query string
    const query = queryString.parse(this.props.location.search);
    console.log('Query ID:', query.id);

    this.props.dispatch(loadEventById(query.id));
  }

  render() {
    const { event } = this.props;
    const test = ['1', '2', '3'];
    const testResult = test.find(element => element === '1');

    console.log(testResult);
    console.log(event);
    let content;
    const error = <div>Oh no Error</div>;
    if (this.props.error) {
      console.log(this.props.error);
      content = error;
    } else if (event) {
      console.log('In Event = tru block');
      const date = `Weekday: ${this.props.event.date.weekday} Month: ${
        this.props.event.date.month
      } Day: ${this.props.event.date.day}`;
      content = (
        <div>
          <div>Event Id: {this.props.event.id}</div>
          <div>Event Title: {this.props.event.title}</div>
          <div>
            Event Message.cardArtist: {this.props.event.message.cardArtist}{' '}
          </div>
          <div>
            Event Message.cardGenre: {this.props.event.message.cardGenre}{' '}
          </div>
          <div>
            Event Message.cardArtist: {this.props.event.message.cardArtist}{' '}
          </div>
          <div>Event Date: {date}</div>
          <div>Location Pathname: {this.props.location.pathname}</div>
          <div>Location Search: {this.props.location.search}</div>
        </div>
      );
    } else {
      console.log('HMMMMMMMM DA FUQ');
      console.log('Event:', event);
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
  error: PropTypes.any,
  location: PropTypes.any,
  loadEvent: PropTypes.func,
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
    loadEvent: id => dispatch(loadEventById(id)),
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
