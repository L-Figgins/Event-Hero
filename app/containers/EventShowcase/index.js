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
import Grid from 'components/MuiGrid';
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

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// import container specific styles
// import Gradient from './gradient';
// import artistBG from '../../images/BG/artist.jpg';
// import Img from '../../components/Img';
import {
  ArtistName,
  ArtistGenre,
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(22, 22, 22);
  box-shadow: 0px 10px 19px 0px rgba(0, 0, 0, 0.45);
  padding-left: 10rem;
  padding-right: 10rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  font-weight: bold;
  color: #ffe7ae;
  border: 1px solid #ffe7ae;
  &:hover {
    box-shadow: 0px 15px 0px 0px rgba(0, 0, 0, 0.5);
    transition: 0.5s ease;
    border: 1px solid #fff;
    h1 {
      color: #fff;
    }
  }
  &:active {
    h1 {
      color: #928f8a;
      border: 1px solid #928f8a;
    }
  }
  h1 {
    font-size: 1rem;
    margin: 0;
  }
  @media screen and (max-width: 80rem) {
    h1 {
      font-size: 1rem;
      color: red;
    }
  }
  @media screen and (max-width: 60rem) {
    h1 {
      font-size: 1rem;
      color: blue;
    }
  }
  @media screen and (max-width: 40rem) {
    h1 {
      font-size: 1rem;
      color: green;
    }
  }
  @media screen and (max-width: 20rem) {
    h1 {
      font-size: 1rem;
      color: yellow;
    }
  }
`;

const Temp = styled.div`
  display: flex;
  flex-direction: row;
`;

const Background = styled.div`
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 75vh;

  @media (max-width: 500px) {
    height: 100vh;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media screen and (max-width: 80rem) {
    h1 {
      font-size: 1rem;
      color: red;
    }
  }
  @media screen and (max-width: 60rem) {
    h1 {
      font-size: 1rem;
      color: blue;
    }
  }
  @media screen and (max-width: 40rem) {
    h1 {
      font-size: 1.25rem;
      color: green;
    }
  }
  @media screen and (max-width: 20rem) {
    h1 {
      font-size: 1.5rem;
      color: yellow;
    }
  }

  @media (max-width: 500px) {
    margin-top: 50%;
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
          {/* <Grid container spacing={0}>
            <Temp>
              <Grid item xs={1} />
              <Grid item xs={10}>
                <Nav redirect={redirect} />
              </Grid>
              <Grid item xs={1} />
            </Temp>
          </Grid> */}

          <Grid container spacing={0}>
            <Temp>
              <Grid item xs={1} />
              <Grid item xs={10}>
                <ContentWrapper>
                  <Tag>Artist Profile</Tag>
                  <ArtistName>{event.name}</ArtistName>
                  <SubTitle>
                    <ArtistGenre>This Header No longer Exists</ArtistGenre>
                    {/* <EventDate>{date}</EventDate> */}
                  </SubTitle>
                  <ArtistBio>{event.description}</ArtistBio>
                  <TicketButton>
                    <H1>Purchase Tickets</H1>
                  </TicketButton>
                </ContentWrapper>
              </Grid>
              <Grid item xs={1} />
            </Temp>
            <Footer />
          </Grid>
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
