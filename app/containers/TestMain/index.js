/**
 *
 * TestMainPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'connected-react-router';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import styled from 'styled-components';

// Rebass
import { Box, Flex, Text, Link } from 'rebass';

// import components

// import EventList from 'components/EventList/Loadable';
// import Nav from 'components/Nav';
// import Hero from 'components/Hero';

import makeSelectMainPage, { makeEventsSelector } from './selectors';
import { loadEvents } from './actions';
import reducer from './reducer';
import saga from './saga';

// import HH from '../../images/BG/HH_BG.jpg';

const TestBox = styled.div`
  color: ${props => props.theme.primary};
  border: 1px solid red;
`;

export class TestMain extends React.Component {
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
    // const { events, redirect } = this.props;
    // console.log('Events Recieved by MainPage:', events);
    // let content;

    // if (events.length > 0) {
    //   content = (
    //     <EventList events={events} handleClick={this.onEventCardClick} />
    //   );
    // }

    return (
      <div>
        <Helmet>
          <title>TESTMain</title>
          <meta name="description" content="Description of MainPage" />
        </Helmet>

        <Flex px={2} color="white" bg="black" alignItems="center">
          <Text p={2} fontWeight="bold">
            HoneyHive
          </Text>
          <Box mx="auto" />
          <Link href="#!" p={2} color="white">
            Profile
          </Link>
        </Flex>

        <Flex>
          <Box width={{ xs: 1, sm: 1, md: 1 / 2, lg: 1, xl: 1 }}>
            <TestBox>Test</TestBox>
          </Box>
        </Flex>
      </div>
    );
  }
}

// 103083454066898
// EAAELyoAkOZC8BAJBR4NL61ULw5Nm6SfWub7e0pcGj7BsPo7qJXmiKeF0hVYhTPHuIvNb0ywHQa4ZCNCEab6SqxSmqT63X1zxxlA2aPPumRLPNZBUKiFxjmMZCsJ8QO9jghVk1eYoW8MngSQhTOmXVCVvpZAq4FdZBdvP6u52dOkSf2f1Ce7USIRNRf9ZBoJmp33C1rxJhgaXBG6ihWZCE4LZCAYYE0cYNXqQNUUtqcsYUpgZDZD

TestMain.propTypes = {
  getEvents: PropTypes.func,
  // events: PropTypes.any,
  showcase: PropTypes.func,
  // redirect: PropTypes.func,
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
)(TestMain);
