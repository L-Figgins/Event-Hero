/**
 *
 * Nav
 *
 */

import React from 'react';
import styled from 'styled-components';
import Grid from 'components/MuiGrid';
import Logo from 'components/Logo';
import Row from 'components/Row';
import H2 from 'components/H2';
import { slide as Menu } from 'react-burger-menu';
// import NavIMG from './NavImage';

// import hamburger from '../../images/Nav/hamburger.png';
// import { push } from 'connected-react-router/immutable';

import NavButton from './NavButton';

const MenuStyled = styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 2rem; */
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled.div`
  outline: none;
  text-decoration: none;
  position: relative;
  line-height: 1;
  font-size: 1.25rem;
  color: #fff;
  display: inline-block;
  font-family: sans-serif;
  transition-timing-function: ease;
  transition-duration: 0.5s;
  &:hover {
    color: #b2b0a9;
    transition-timing-function: ease;
    transition-duration: 0.5s;
  }
  &:active {
    color: #b2b0a9;
  }
`;

const Bar = styled(Row)`
  max-height: 5rem;
  /* background-color: black; */
`;

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Nav = props => (
  <Bar>
    <MenuStyled>
      <Menu>
        <a id="home" className="menu-item" href="/">
          <Logo height="5rem" width="5rem" />
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Gallery
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        {/* <a onClick={this.showSettings} className="menu-item--small" href="">
        Settings
      </a> */}
      </Menu>
    </MenuStyled>
    <Grid item xs={1}>
      <Box>
        <NavButton {...props} path="/">
          <Logo height="5rem" width="5rem" />
        </NavButton>
      </Box>
    </Grid>
    <Grid item xs={8} />
    <Grid item xs={1}>
      <NavButton {...props} path="/About">
        <StyledLink>
          <H2>About</H2>
        </StyledLink>
      </NavButton>
    </Grid>
    <Grid item xs={1}>
      <NavButton {...props} path="/Gallery">
        <StyledLink>
          <H2>Gallery</H2>
        </StyledLink>
      </NavButton>
    </Grid>
    <Grid item xs={1}>
      <NavButton {...props} path="/Contact">
        <StyledLink>
          <H2>Contact</H2>
        </StyledLink>
      </NavButton>
    </Grid>
  </Bar>
);

Nav.propTypes = {};

export default Nav;
