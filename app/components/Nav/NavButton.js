import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: 50%;
  width: 50%;
  color: #fff;

  h2 {
    font-size: 1.5rem;
    margin: 0;
    font-weight: 400;
    color: #ffe7ae;
  }
  @media screen and (max-width: 80rem) {
    h2 {
      font-size: 1.45rem;
      color: red;
    }
  }
  @media screen and (max-width: 60rem) {
    h2 {
      font-size: 1.4rem;
      color: blue;
    }
  }
  @media screen and (max-width: 40rem) {
    h2 {
      font-size: 1.35rem;
      color: green;
    }
  }
  @media screen and (max-width: 20rem) {
    h2 {
      font-size: 1.35rem;
      color: yellow;
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
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
