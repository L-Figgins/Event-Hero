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
// import { push } from 'connected-react-router/immutable';

import NavButton from './NavButton';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 2rem; */
  justify-content: center;
  align-items: center;
`;
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Nav = props => (
  <Row>
    <Grid item xs={2}>
      <Box>
        <Logo height="5rem" width="5rem" />
      </Box>
    </Grid>
    <Grid item xs={4} />
    <Grid item xs={2}>
      <NavButton {...props} path="/About">
        About
      </NavButton>
    </Grid>
    <Grid item xs={2}>
      <NavButton {...props} path="/Gallery">
        Gallery
      </NavButton>
    </Grid>
    <Grid item xs={2}>
      <NavButton {...props} path="/Gallery">
        Contact
      </NavButton>
    </Grid>
  </Row>
);

Nav.propTypes = {};

export default Nav;
