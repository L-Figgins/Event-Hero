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
// import Gradient from './gradient';
// import artistBG from '../../images/BG/artist.jpg';
// import Img from '../../components/Img';
import {
  ArtistName,
  Tag,
  ArtistBio,
  // SubTitle,
} from './local-styles';

import Logo from '../../components/Logo';

const Temp = styled.div`
  display: flex;
  flex-direction: row;
`;

const Background = styled.div`
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  width: 80%;
  height: 100%;
  overflow-y: hidden;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 30%;
  margin-bottom: 10%;
  /* margin-top: 25%; */

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
    const { event, loading, error } = this.props;
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
          <Grid container spacing={0}>
            <Temp>
              <Grid item xs={1} />
              <Grid item xs={1}>
                <Logo height="5rem" width="5rem" />
              </Grid>
              <Grid item xs={8} />
              <Grid item xs={1} />
              <Grid item xs={1} />
            </Temp>
          </Grid>

          <Grid container spacing={0}>
            <Temp>
              <Grid item xs={1} />
              <Grid item xs={10}>
                <ContentWrapper>
                  <Tag>Artist Profile</Tag>
                  <ArtistName>{this.props.event.name}</ArtistName>
                  <ArtistBio>{this.props.event.description}</ArtistBio>
                </ContentWrapper>
              </Grid>
              <Grid item xs={1} />
            </Temp>
          </Grid>
        </Background>
      );
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
