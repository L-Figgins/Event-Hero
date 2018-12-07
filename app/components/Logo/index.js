import React from 'react';
import LogoIMG from './LogoIMG';
import HoneyHiveLogo from '../../images/Logo/logo.png';
import Wrapper from './Wrapper';

const Logo = props => (
  <Wrapper>
    <LogoIMG src={HoneyHiveLogo} {...props} />
  </Wrapper>
);

Logo.propTypes = {};

export default Logo;
