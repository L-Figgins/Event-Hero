/**
 *
 * HomeButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from 'components/Logo';
// import { Box, Flex } from 'rebass';

const StyledButton = styled.div`
  position: absolute;
  left: 1.85rem;
  top: 0.75rem;
  width: 2.25rem;
  height: 2.25rem;
`;

const HomeButton = props => {
  const onClickRedirect = () => {
    props.redirect('/');
  };

  return (
    <StyledButton {...props} onClick={onClickRedirect}>
      <Logo height="3.5rem" width="3.5rem" />
    </StyledButton>
  );
};

HomeButton.propTypes = {
  redirect: PropTypes.func.isRequired,
};

export default HomeButton;
