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
// import NavIMG from './NavImage';

// import hamburger from '../../images/Nav/hamburger.png';
// import { push } from 'connected-react-router/immutable';

import NavButton from './NavButton';

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
  background-color: rgb(20, 20, 20);
`;

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Nav = props => (
  <Bar>
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
    <Grid item xs={1}>
      <NavButton {...props} path="/TestMain">
        <StyledLink>
          <H2>TestMain</H2>
        </StyledLink>
      </NavButton>
    </Grid>
  </Bar>
);

Nav.propTypes = {};

export default Nav;
