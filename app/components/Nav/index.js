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
// import { push } from 'connected-react-router/immutable';

import NavButton from './NavButton';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 2rem; */
  justify-content: center;
  align-items: center;
`;

const Bar = styled(Row)`
  /* background-color: black; */
`;
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Nav = props => (
  <Bar>
    <Grid item xs={2}>
      <Box>
        <Logo height="5rem" width="5rem" />
      </Box>
    </Grid>
    <Grid item xs={4} />
    <Grid item xs={2}>
      <NavButton {...props} path="/About">
        <H2>About</H2>
      </NavButton>
    </Grid>
    <Grid item xs={2}>
      <NavButton {...props} path="/Gallery">
        <H2>Gallery</H2>
      </NavButton>
    </Grid>
    <Grid item xs={2}>
      <NavButton {...props} path="/Contact">
        <H2>Contact</H2>
      </NavButton>
    </Grid>
  </Bar>
);

Nav.propTypes = {};

export default Nav;
