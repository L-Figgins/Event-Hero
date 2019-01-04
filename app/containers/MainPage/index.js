/**
 *
 * Home Page
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Hide from 'hidden-styled';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'connected-react-router';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

// Rebass
import { Box, Flex } from 'rebass';

// import components
import HomeButton from 'components/HomeButton';
import Welcome from 'components/Welcome';
import EventList from 'components/EventList/Loadable';
import Nav from 'components/Nav';
import Hero from 'components/Hero';
import Footer from 'components/Footer';

import makeSelectMainPage, { makeEventsSelector } from './selectors';
import { loadEvents } from './actions';
import reducer from './reducer';
import saga from './saga';

import HH from '../../images/BG/HH_BG.jpg';

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
    console.log('Events Recieved by MainPage:', events);
    let content;

    if (events.length > 0) {
      content = (
        <EventList events={events} handleClick={this.onEventCardClick} />
      );
    }

    return (
      <React.Fragment>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Description of MainPage" />
        </Helmet>

        <Hide md lg>
          <HomeButton redirect={redirect} />
        </Hide>

        <Hero img={HH}>
          <Flex bg="#141414">
            <Box width={{ xs: 1 / 12 }} />
            <Box width={{ xs: 10 / 12 }}>
              <Nav redirect={redirect} />
            </Box>
            <Box width={{ xs: 1 / 12 }} />
          </Flex>
        </Hero>
        <Welcome />
        <Flex justifyContent="center" bg="#141414">
          <Box width={{ xs: 1 / 12 }} />
          <Box width={{ xs: 10 / 12 }}>{content}</Box>
          <Box width={{ xs: 1 / 12 }} />
        </Flex>
        <Footer />
      </React.Fragment>
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
