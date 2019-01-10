/**
 *
 * Hamburger
 *
 */

import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Logo from 'components/Logo';
import PropTypes from 'prop-types';
import MenuStyled from './MenuStyled';
import MenuStyledButton from './MenuStyledButton';
import MobileBar from './MobileBar';

const Hamburger = props => {
  const onClickRedirect = () => {
    props.redirect('/');
  };

  return (
    <MobileBar>
      <MenuStyled>
        <Menu width="100%">
          <MenuStyledButton {...props} onClick={onClickRedirect}>
            <Logo height="3.5rem" width="3.5rem" />
          </MenuStyledButton>

          <a href="/" data-letters="Home" className="link link--kukuri">
            Home
          </a>
          <a href="/about" data-letters="About" className="link link--kukuri">
            About
          </a>
          <a
            href="/gallery"
            data-letters="Gallery"
            className="link link--kukuri"
          >
            Gallery
          </a>
          <a
            href="/contact"
            data-letters="Contact"
            className="link link--kukuri"
          >
            Contact
          </a>
        </Menu>
      </MenuStyled>
    </MobileBar>
  );
};

Hamburger.propTypes = { redirect: PropTypes.func };

export default Hamburger;
