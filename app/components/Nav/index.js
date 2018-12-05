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

const Box = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 2rem; */
  justify-content: center;
  align-items: center;
`;
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Nav = () => (
  <Row>
    <Grid item xs={2}>
      <Box>
        <Logo height="5rem" width="5rem" />
      </Box>
    </Grid>
    <Grid item xs={4}>
      col 4
    </Grid>
    <Grid item xs={2}>
      About
    </Grid>
    <Grid item xs={2}>
      Gallery
    </Grid>
    <Grid item xs={2}>
      Contact
    </Grid>
  </Row>
);

Nav.propTypes = {};

export default Nav;
