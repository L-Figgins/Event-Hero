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

import { push } from 'connected-react-router';

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

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// import container specific styles
// import Gradient from './gradient';
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

// const Wrapper = styled.div`
//   height: 100%;
//   width: 100%;
// `;

const Temp = styled.div`
  display: flex;
  flex-direction: row;
`;

const Background = styled.div`
  background-image: linear-gradient(
      0deg,
      rgb(22, 22, 22),
      rgb(22, 22, 22, 0.75)
    ),
    url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  width: 80%;
  height: 100%;
  overflow: hidden;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 30%;
  margin-bottom: 10%;
  /* margin-top: 25%; */

  @media (max-width: 500px) {
    margin-top: 50%;
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
    const { redirect } = this.props;
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
          <ArtistName>{event.message.artistName}</ArtistName>
          <SubTitle>
            <ArtistGenre>{event.message.artistGenre}</ArtistGenre>
            <EventDate>{date}</EventDate>
          </SubTitle>
          <ArtistBio>{event.message.artistBio}</ArtistBio>
        </ContentWrapper>
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

        <Background img={event.imageURL}>
          <Grid container spacing={0}>
            <Temp>
              <Grid item xs={1} />
              <Grid item xs={10}>
                <Nav redirect={redirect} />
              </Grid>
              <Grid item xs={1} />
            </Temp>
          </Grid>

          <Grid container spacing={0}>
            <Temp>
              <Grid item xs={1} />
              <Grid item xs={10}>
                {content}
              </Grid>
              <Grid item xs={1} />
            </Temp>
            <Footer />
          </Grid>
        </Background>
      </div>
    );
  }
}

// TODO make real prop type tests
EventShowcase.propTypes = {
  event: PropTypes.any,
  error: PropTypes.any,
  location: PropTypes.any,
  dispatch: PropTypes.any,
  redirect: PropTypes.func.isRequired,
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
