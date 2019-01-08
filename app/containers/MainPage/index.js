/** **********
 *
 * Home Page
 *
 *********** */

// React / React Router
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Helmet } from 'react-helmet';

// Dependencies
import Hide from 'hidden-styled';

// Rebass
import { Box, Flex } from 'rebass';

// Components
import HomeButton from 'components/HomeButton';
import Welcome from 'components/Welcome';
import EventList from 'components/EventList/Loadable';
import Nav from 'components/Nav';
import Hero from 'components/Hero';
import Footer from 'components/Footer';
import LoadingIndicator from 'components/LoadingIndicator';

// Redux
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import saga from './saga';
import reducer from './reducer';
import makeSelectMainPage, {
  makeEventsSelector,
  makeLoadingSelector,
  makeErrorSelector,
} from './selectors';

import { loadEvents } from './actions';

// Imported Media
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
    const { events, error, loading, redirect } = this.props;
    let content;

    if (error) {
      console.log('error', error);
    } else if (loading) {
      console.log('loading');
      content = <LoadingIndicator />;
    }
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
            <Box width={{ xs: 1 }}>
              <Nav redirect={redirect} />
            </Box>
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

MainPage.propTypes = {
  getEvents: PropTypes.func,
  events: PropTypes.any,
  showcase: PropTypes.func,
  redirect: PropTypes.func,
  error: PropTypes.any,
  loading: PropTypes.bool,
  // mainpage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeLoadingSelector(),
  error: makeErrorSelector(),
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
