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
import Box from 'components/TestBox';

// import NavIMG from './NavImage';

// import hamburger from '../../images/Nav/hamburger.png';
// import { push } from 'connected-react-router/immutable';

import { Flex } from 'rebass';
import NavButton from './NavButton';

const StyledBar = styled(Flex)`
  background-color: ${props => props.theme.colors.primary};
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

// const Bar = styled(Row)`
//   max-height: 5rem;
//   background-color: rgb(20, 20, 20);
// `;

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Nav = props => (
  <Hide xs sm>
    <Bar>
      <Box width={{ xs: 1 / 12 }}>
        <NavButton {...props} path="/">
          <Logo height="5rem" width="5rem" />
        </NavButton>
      </Box>

      <Box width={{ xs: 8 / 12 }} />

      <Box width={{ xs: 1 / 12 }}>
        <NavButton {...props} path="/About">
          <StyledLink>
            <H2>About</H2>
          </StyledLink>
        </NavButton>
      </Box>

      <Box width={{ xs: 1 / 12 }}>
        <NavButton {...props} path="/Gallery">
          <StyledLink>
            <H2>Gallery</H2>
          </StyledLink>
        </NavButton>
      </Box>

      <Box width={{ xs: 1 / 12 }}>
        <NavButton {...props} path="/Contact">
          <StyledLink>
            <H2>Contact</H2>
          </StyledLink>
        </NavButton>
      </Box>
    </Bar>
  </Hide>
);

Nav.propTypes = {};

export default withTheme(Nav);
