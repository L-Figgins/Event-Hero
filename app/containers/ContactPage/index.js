/**
 *
 * Contact
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import Nav from '../../components/Nav';
import Hero from '../../components/Hero';

import messages from './messages';

function Contact() {
  return (
    <div>
      <Nav />
      <FormattedMessage {...messages.header} />
      <Hero />
    </div>
  );
}

Contact.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Contact);
