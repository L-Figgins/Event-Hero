import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: 60%;
  width: 60%;
`;

const NavButton = props => {
  const onClickRedirect = () => {
    props.redirect(props.path);
  };

  return <Button {...props} onClick={onClickRedirect} />;
};

export default NavButton;
