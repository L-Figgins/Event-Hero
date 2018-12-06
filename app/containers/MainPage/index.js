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
// import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

// import components

import Grid from 'components/MuiGrid';
import EventList from 'components/EventList/Loadable';
import Hero from 'components/Hero';
import Welcome from 'components/Welcome';
// import Logo from 'components/Logo';
import Footer from 'components/Footer';
import Nav from 'components/Nav';

import makeSelectMainPage, { makeEventsSelector } from './selectors';
import { loadEvents } from './actions';
import reducer from './reducer';
import saga from './saga';

import HH from '../../images/BG/HH_BG.jpg';

// const Box = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   padding-top: 2rem;
//   padding-bottom: 2rem;
// `;

// const Temp = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

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
    const eventId = event.currentTarget.id;
    this.props.showcase(eventId);
  }

  render() {
    const { events, redirect } = this.props;
    let content;

    if (events.length > 0) {
      content = (
        <EventList events={events} handleClick={this.onEventCardClick} />
      );
    }

    return (
      <Grid container spacing={0}>
        <Helmet>
          <title>MainPage</title>
          <meta name="description" content="Description of MainPage" />
        </Helmet>
        <Hero img={HH}>
          <Grid item xs={1} />
          <Grid container item xs={10}>
            <Nav redirect={redirect} />
          </Grid>
          <Grid item xs={1} />
        </Hero>
        <Welcome />
        {content}
        <Footer />
      </Grid>
    );
  }
}

// 103083454066898
// EAAELyoAkOZC8BAJBR4NL61ULw5Nm6SfWub7e0pcGj7BsPo7qJXmiKeF0hVYhTPHuIvNb0ywHQa4ZCNCEab6SqxSmqT63X1zxxlA2aPPumRLPNZBUKiFxjmMZCsJ8QO9jghVk1eYoW8MngSQhTOmXVCVvpZAq4FdZBdvP6u52dOkSf2f1Ce7USIRNRf9ZBoJmp33C1rxJhgaXBG6ihWZCE4LZCAYYE0cYNXqQNUUtqcsYUpgZDZD

MainPage.propTypes = {
  getEvents: PropTypes.func,
  events: PropTypes.any,
  showcase: PropTypes.func,
  redirect: PropTypes.func,
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
    redirect: url => dispatch(push(url)),
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
