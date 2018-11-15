/**
 *
 * MainPage
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

// import components

import Grid from 'components/MuiGrid';
import Header from 'components/Header';
import EventList from 'components/EventList/Loadable';
import Hero from 'components/Hero';
import Welcome from 'components/Welcome';
import Logo from 'components/Logo';

import makeSelectMainPage, { makeEventsSelector } from './selectors';
import { loadEvents } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class MainPage extends React.Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const { events } = this.props;

    console.log(events);
    let content;

    if (events.length > 0) {
      content = <EventList events={events} />;
    }
    // else {
    //   content = <div>NO EVENTS FUCK ME</div>;
    // }

    return (
      <Grid container spacing={16}>
        <Helmet>
          <title>MainPage</title>
          <meta name="description" content="Description of MainPage" />
        </Helmet>
        {/* <FormattedMessage {...messages.header} /> */}
        <Header />
        <Hero height="60vh" heightBig="100vh">
          <Logo />
        </Hero>
        <Welcome />
        <Grid item xs={12}>
          {content}
        </Grid>
      </Grid>
    );
  }
}

MainPage.propTypes = {
  // mainpage: PropTypes.object,
  getEvents: PropTypes.func,
  events: PropTypes.any,
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
