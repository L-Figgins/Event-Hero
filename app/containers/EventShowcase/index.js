/** ***********
 *
 * Event Showcase
 *
 ************ */
// React
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// React Router
import { push } from 'connected-react-router';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import queryString from 'query-string';
import LoadingIndicator from 'components/LoadingIndicator';

// Rebass
import { Flex, Box } from 'rebass';

// Dependencies
import {
  ArtistName,
  // ArtistGenre,
  Tag,
  ArtistBio,
  SubTitle,
} from './local-styles';

// Components
import H1 from '../../components/H1';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import TicketButton from './TicketButton';
import Overlay from './Overlay';
import Background from './Background';
import ContentWrapper from './ContentWrapper';

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

    this.props.loadEvent(query.id);
  }

  render() {
    // const { event } = this.props;
    let content;
    const { event, loading, error, redirect } = this.props;

    if (error) {
      console.log('error', error);
    } else if (loading) {
      console.log('loading');
      content = <LoadingIndicator />;
    } else if (event) {
      console.log('event exists');
      content = (
        <Background img={event.cover.source}>
          <Overlay>
            <Flex bg="#141414" flexWrap="wrap">
              <Box width={{ xs: 1 }}>
                <Nav redirect={redirect} />
              </Box>
            </Flex>

            <Flex>
              <Box width={{ xs: 1 / 12, lg: 3 / 12 }} />
              <Box width={{ xs: 10 / 12, lg: 6 / 12 }}>
                <ContentWrapper>
                  <Tag>Artist Profile</Tag>
                  <ArtistName>{event.name}</ArtistName>
                  <SubTitle>{/* <EventDate>{date}</EventDate> */}</SubTitle>
                  <ArtistBio>{event.description}</ArtistBio>
                  <TicketButton>
                    <H1>Purchase Tickets</H1>
                  </TicketButton>
                </ContentWrapper>
              </Box>
              <Box width={{ xs: 1 / 12, lg: 3 / 12 }} />
            </Flex>
            <Footer />
          </Overlay>
        </Background>
      );
    } else {
      console.log('Event Not Found:', event);
    }

    return (
      <div>
        <Helmet>
          <title>Event Showcase</title>
          <meta
            name="description"
            content="A Showcase Of Our Latest Ongoing Events"
          />
        </Helmet>
        {content}
      </div>
    );
  }
}

// TODO make real prop type tests
EventShowcase.propTypes = {
  event: PropTypes.any,
  error: PropTypes.any,
  loading: PropTypes.bool,
  location: PropTypes.any,
  redirect: PropTypes.func.isRequired,
  loadEvent: PropTypes.any,
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
    redirect: url => dispatch(push(url)),
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
