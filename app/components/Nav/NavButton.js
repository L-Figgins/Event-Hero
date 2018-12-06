import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: 100%;
  width: 100%;
  color: #7f7e77;

  h2 {
    font-size: 1.25rem;
    margin: 0;
    font-weight: 400;
  }
  @media screen and (max-width: 80rem) {
    h2 {
      font-size: 1.15rem;
      color: red;
    }
  }
  @media screen and (max-width: 60rem) {
    h2 {
      font-size: 1.05rem;
      color: blue;
    }
  }
  @media screen and (max-width: 40rem) {
    h2 {
      font-size: 0.95rem;
      color: green;
    }
  }
  @media screen and (max-width: 20rem) {
    h2 {
      font-size: 1.15rem;
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
