/**
 *
 * MainPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'connected-react-router';
import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

// import components

import Grid from 'components/MuiGrid';
import EventList from 'components/EventList/Loadable';
import Hero from 'components/Hero';
import Welcome from 'components/Welcome';
import Logo from 'components/Logo';
import Footer from 'components/Footer';

import makeSelectMainPage, { makeEventsSelector } from './selectors';
import { loadEvents } from './actions';
import reducer from './reducer';
import saga from './saga';

const Temp = styled.div`
  display: flex;
  flex-direction: row;
`;

/* eslint-disable react/prefer-stateless-function */
export class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.onEventCardClick = this.onEventCardClick.bind(this);
  }

  componentDidMount() {
    this.props.getEvents();
  }

  onEventCardClick(event) {
    console.log('Clicked');
    const eventId = event.currentTarget.id;
    console.log(`Attempting to Redirect to EventShowcase?id=${eventId}`);
    this.props.showcase(eventId);
  }

  render() {
    const { events } = this.props;

    console.log(events);
    let content;

    if (events.length > 0) {
      content = (
        <EventList events={events} handleClick={this.onEventCardClick} />
      );
    }
    // else {
    //   content = <div>NO EVENTS FUCK ME</div>;
    // }

    return (
      <Grid container spacing={0}>
        <Helmet>
          <title>MainPage</title>
          <meta name="description" content="Description of MainPage" />
        </Helmet>
        {/* <FormattedMessage {...messages.header} /> */}
        <Hero>
          <Grid item container spacing={0}>
            <Temp>
              <Grid item xs={1} />
              <Grid item xs={1}>
                <Logo height="5rem" width="5rem" />
              </Grid>
              <Grid item xs={8} />
              <Grid item xs={1} />
              <Grid item xs={1} />
            </Temp>
          </Grid>
        </Hero>
        <Welcome />
        {content}
        <Footer />
      </Grid>
    );
  }
}

MainPage.propTypes = {
  // mainpage: PropTypes.object,
  getEvents: PropTypes.func,
  events: PropTypes.any,
  showcase: PropTypes.func,
  // error: PropTypes.func,
  // loading: PropTypes.func,
  // mainpage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // loading: makeLoadingSelector(),
  // error: makeErrorSelector(),
  mainpage: makeSelectMainPage(),
  events: makeEventsSelector(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getEvents: () => dispatch(loadEvents()),
    showcase: id => {
      const url = `/EventShowcase?id=${id}`;
      dispatch(push(url));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'mainPage', reducer });
const withSaga = injectSaga({ key: 'mainPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MainPage);
