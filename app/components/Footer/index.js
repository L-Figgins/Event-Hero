/**
 *
 * Footer
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Flex, Box } from 'rebass';
import messages from './messages';
import FooterWrapper from './FooterWrapper';

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
