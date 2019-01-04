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
import { Flex, Box } from 'rebass';
import messages from './messages';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(22, 22, 22);
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: #3a3a3a;
`;

function Footer() {
  return (
    <FooterWrapper>
      <Flex>
        <Box width={{ xs: 1 / 12 }} />
        <Box width={{ xs: 10 / 12 }}>
          <FormattedMessage {...messages.copyright} />
        </Box>
        <Box width={{ xs: 1 / 12 }} />
      </Flex>
    </FooterWrapper>
  );
}

Footer.propTypes = {};

export default Footer;
