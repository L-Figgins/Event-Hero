/**
 *
 * HomeButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'components/Logo';
import StyledButton from './StyledButton';

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
