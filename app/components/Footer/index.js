/**
 *
 * Footer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(22, 22, 22, 1);
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FormattedMessage {...messages.copyright} />
    </FooterWrapper>
  );
}

Footer.propTypes = {};

export default Footer;
