import React from 'react';
import LogoIMG from './LogoIMG';
import HoneyHiveLogo from '../../images/Logo/logo.png';

const Logo = props => <LogoIMG src={HoneyHiveLogo} {...props} />;

Logo.propTypes = {};

export default Logo;
