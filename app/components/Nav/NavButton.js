import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: 60%;
  width: 60%;
  color: #fff;
  h2 {
    font-size: 1.75rem;
    margin: 0;
  }
  @media screen and (max-width: 80rem) {
    h2 {
      font-size: 1.75rem;
      color: red;
    }
  }
  @media screen and (max-width: 60rem) {
    h2 {
      font-size: 1.5rem;
      color: blue;
    }
  }
  @media screen and (max-width: 40rem) {
    h2 {
      font-size: 1.25rem;
      color: green;
    }
  }
  @media screen and (max-width: 20rem) {
    h2 {
      font-size: 2.5rem;
      color: yellow;
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  margin: auto;
  border: 1px solid purple;
`;

const NavButton = props => {
  const onClickRedirect = () => {
    props.redirect(props.path);
  };

  return <Button {...props} onClick={onClickRedirect} />;
};

export default NavButton;
