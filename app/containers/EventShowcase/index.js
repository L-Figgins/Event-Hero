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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Grid from 'components/MuiGrid';
import makeSelectEventShowcase, {
  makeSelectEvent,
  makeSelectEventShowcaseError,
  makeSelectEventShowcaseLoading,
} from './selectors';
import { makeSelectLocation } from '../App/selectors';
import reducer from './reducer';
import saga from './saga';
import { loadEventById } from './actions';

// import container specific styles
import Gradient from './gradient';
// import artistBG from '../../images/BG/artist.jpg';
// import Img from '../../components/Img';
import {
  ArtistGenre,
  ArtistName,
  Tag,
  ArtistBio,
  EventDate,
  SubTitle,
} from './local-styles';

import Logo from '../../components/Logo';

// const Wrapper = styled.div`
//   height: 100%;
//   width: 100%;
// `;

const Background = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center center;

  @media (max-width: 650px) {
    height: 100%;
    min-height: 100vh;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 25%;

  @media (max-width: 500px) {
    /* padding-top: 55%; */
  }
`;

// const StyledImg = styled(Img)`
//   height: 100vh;
//   width: 100%;
//   z-index: 1;
//   position: absolute;
//   /* width: 80%;
//   margin-left: 10%;
//   margin-right: 10%; */
// `;

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
    let content;
    const error = <div>Oh no Error</div>;
    if (this.props.error) {
      console.log(this.props.error);
      content = error;
    } else if (event) {
      console.log('In Event = tru block');
      const date = `${event.date.weekday} ${event.date.month} ${
        event.date.day
      }`;
      content = (
        <ContentWrapper>
          <Tag>Artist Profile</Tag>
          <ArtistName>{event.message.cardArtist}</ArtistName>
          <SubTitle>
            <ArtistGenre>{event.message.cardGenre}</ArtistGenre>
            <EventDate>{date}</EventDate>
          </SubTitle>
          <ArtistBio>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            enim lobortis scelerisque fermentum dui faucibus in ornare. Odio ut
            enim blandit volutpat maecenas volutpat. Habitant morbi tristique
            senectus et netus. Donec enim diam vulputate ut pharetra sit.
            Scelerisque eleifend donec pretium vulputate. Odio aenean sed
            adipiscing diam donec adipiscing. Libero volutpat sed cras ornare
            arcu dui. Dui vivamus arcu felis bibendum ut tristique et egestas
            quis. Luctus accumsan tortor posuere ac ut consequat semper viverra
            nam. Ac odio tempor orci dapibus ultrices. Scelerisque mauris
            pellentesque pulvinar pellentesque habitant morbi tristique. Nibh
            cras pulvinar mattis nunc. Vel orci porta non pulvinar neque.
          </ArtistBio>
        </ContentWrapper>
      );
    } else {
      console.log('HMMMMMMMM DA FUQ');
      console.log('Event:', event);
    }

    return (
      <Grid container spacing={0}>
        <Helmet>
          <title>EventShowcase</title>
          <meta name="description" content="Description of EventShowcase" />
        </Helmet>
        <Gradient />
        <Background img={event.imageURL}>
          <Grid item xs={3} lg={1}>
            <Logo height="5rem" width="5rem" />
          </Grid>
          {content}
        </Background>
      </Grid>
    );
  }
}

// TODO make real prop type tests
EventShowcase.propTypes = {
  event: PropTypes.any,
  error: PropTypes.any,
  location: PropTypes.any,
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
