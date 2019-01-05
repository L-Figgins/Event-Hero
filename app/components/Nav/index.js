/**
 *
 * Nav
 *
 */

import React from 'react';
import styled, { withTheme } from 'styled-components';
import Hide from 'hidden-styled';
// import Grid from 'components/MuiGrid';
import Logo from 'components/Logo';
import H2 from 'components/H2';
import { Flex, Box } from 'rebass';

// import NavIMG from './NavImage';

// import hamburger from '../../images/Nav/hamburger.png';
// import { push } from 'connected-react-router/immutable';

import NavButton from './NavButton';

const StyledBar = styled(Flex)`
  background-color: ${props => props.theme.colors.primary};
  height: 5rem;

  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.8);

  h2 {
    font-weight: 900;
    font-size: 1rem;
  }
`;

const Bar = props => <StyledBar {...props} />;

const StyledLink = styled.div`
  outline: none;
  text-decoration: none;
  position: relative;
  line-height: 1;
  font-size: 1.25rem;
  color: #fff;
  display: inline-block;
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

const Nav = props => (
  <Hide xs sm>
    <Bar>
      <Box width={{ xs: 1 / 12 }} />
      <Box width={{ xs: 1 / 12 }}>
        <NavButton {...props} path="/">
          <Logo height="4rem" width="4rem" />
        </NavButton>
      </Box>

      <Box width={{ xs: 6 / 12 }} />

      <Box width={{ xs: 1 / 12 }}>
        <NavButton {...props} path="/About">
          <StyledLink>
            <H2>ABOUT</H2>
          </StyledLink>
        </NavButton>
      </Box>

      <Box width={{ xs: 1 / 12 }}>
        <NavButton {...props} path="/Gallery">
          <StyledLink>
            <H2>GALLERY</H2>
          </StyledLink>
        </NavButton>
      </Box>

      <Box width={{ xs: 1 / 12 }}>
        <NavButton {...props} path="/Contact">
          <StyledLink>
            <H2>CONTACT</H2>
          </StyledLink>
        </NavButton>
      </Box>
      <Box width={{ xs: 1 / 12 }} />
    </Bar>
  </Hide>
);

Nav.propTypes = {};

export default withTheme(Nav);
