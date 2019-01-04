/**
 *
 * EventShowcase
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import LoadingIndicator from 'components/LoadingIndicator';
import { push } from 'connected-react-router';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Flex, Box } from 'rebass';
import H1 from '../../components/H1';
import makeSelectEventShowcase, {
  makeSelectEvent,
  makeSelectEventShowcaseError,
  makeSelectEventShowcaseLoading,
} from './selectors';
import { makeSelectLocation } from '../App/selectors';
import reducer from './reducer';
import saga from './saga';
import { loadEventById } from './actions';

// import TestBox from '../../components/TestBox';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// import container specific styles
// import Gradient from './gradient';
// import artistBG from '../../images/BG/artist.jpg';
// import Img from '../../components/Img';
import {
  ArtistName,
  // ArtistGenre,
  Tag,
  ArtistBio,
  SubTitle,
} from './local-styles';

// const Wrapper = styled.div`
//   height: 100%;
//   width: 100%;
// `;

const TicketButton = styled.button`
  width: 100%;
  background-color: #141414;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
  color: #ffe7ae;
  border: 1px solid #ffe7ae;

  h1 {
    font-size: 1rem;
  }
  &:hover {
    box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.5);
    transition: 0.5s ease;
    border: 1px solid #fff;
    h1 {
      color: #fff;
    }
  }
  &:active {
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.5);
    transition: 0.5s ease;
    border: 1px solid #fff;
    h1 {
      color: #928f8a;
      border: 1px solid #928f8a;
    }
  }
`;

const Overlay = styled.div`
  background-color: #141414;
  opacity: 0.8;
  position: relative;
  top: 0;
  left: 0;
`;

const Background = styled.div`
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 80vh;
`;

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 82.25vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 2rem;

  @media screen and (max-width: 80rem) {
    h1 {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 60rem) {
    h1 {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 40rem) {
    h1 {
      font-size: 1.25rem;
    }
  }
  @media screen and (max-width: 20rem) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

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
    const ErrorMsg = <div>Oh no Error</div>;

    if (error) {
      console.log('error', error);
      content = ErrorMsg;
    } else if (loading) {
      console.log('loading');
      content = <LoadingIndicator />;
    } else if (event) {
      console.log('event exists');
      content = (
        <Background img={event.cover.source}>
          <Overlay>
            <Flex flexWrap="wrap">
              <Box width={{ xs: 1 / 12 }} />
              <Box width={{ xs: 10 / 12 }}>
                <Nav redirect={redirect} />
              </Box>
              <Box width={{ xs: 1 / 12 }} />
            </Flex>

            <Flex>
              <Box width={{ xs: 1 / 12, lg: 3 / 12 }} />
              <Box width={{ xs: 10 / 12, lg: 6 / 12 }}>
                <ContentWrapper>
                  <Tag>Artist Profile</Tag>
                  <ArtistName>{event.name}</ArtistName>
                  <SubTitle>
                    {/* <ArtistGenre>This Header No longer Exists</ArtistGenre> */}
                    {/* <EventDate>{date}</EventDate> */}
                  </SubTitle>
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
