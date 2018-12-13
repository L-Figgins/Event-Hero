/**
 *
 * Menu
 *
 */

import React from 'react';
import styled from 'styled-components';
import Grid from 'components/MuiGrid';
import Row from 'components/Row';
import NavButton from '../Nav/NavButton';

const NavMenu = styled.div`
  z-index: 1000;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

  li {
    padding: 10px 0;
    font-size: 22px;
  }
  input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }

  input:checked ~ ul {
    transform: scale(1, 1);
    opacity: 1;
  }

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #000000;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
`;

const StyledNavLink = styled('Link')`
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  color: #000000;
  transition: color 0.3s ease;
  &:hover {
    color: #999999;
  }
`;

const NavBurger = styled.div`
  display: block;
  position: relative;
  top: 10rem;
  left: 10rem;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;

  span:first-child {
    transform-origin: 0% 0%;
  }
  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #000000;
  }
  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  input:checked ~ span:nth-last-child(2) {
    opacity: 1;
    transform: rotate(-45deg) translate(0, -1px);
  }
`;

const Menu = props => (
  <NavMenu>
    <Grid container spacing={0}>
      <Row>
        <Grid item xs={1} />
        <Grid item xs={1}>
          <NavBurger>TEST</NavBurger>
        </Grid>
        <Grid item xs={9}>
          <NavButton {...props} path="/">
            <StyledNavLink>Test Link Here</StyledNavLink>
          </NavButton>
        </Grid>
        <Grid item xs={1} />
      </Row>
    </Grid>
  </NavMenu>
);

Menu.propTypes = {};

export default Menu;
