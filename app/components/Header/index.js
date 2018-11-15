import React from 'react';
import { FormattedMessage } from 'react-intl';

// import A from './A';
// import Img from './Img';
import HeaderLink from './HeaderLink';
import messages from './messages';
import Wrapper from './Wrapper';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <Wrapper>
          <HeaderLink to="/">
            <FormattedMessage {...messages.main} />
          </HeaderLink>
          <HeaderLink to="/featured">
            <FormattedMessage {...messages.featured} />
          </HeaderLink>
          <HeaderLink to="/details">
            <FormattedMessage {...messages.details} />
          </HeaderLink>
        </Wrapper>
      </div>
    );
  }
}

export default Header;
