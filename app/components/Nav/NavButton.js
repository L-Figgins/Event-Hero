import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: 100%;
  width: 100%;
  color: #7f7e77;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  &:focus {
    outline: 0;
  }

  &:hover {
    color: #fff;
  }

  h2 {
    font-size: 1.25rem;
    margin: 0;
    font-weight: 400;
  }
  @media screen and (max-width: 80rem) {
    h2 {
      font-size: 1.15rem;

      display: block;
    }
  }
  @media screen and (max-width: 60rem) {
    h2 {
      font-size: 1.05rem;
      display: block;
    }
  }
  @media screen and (max-width: 40rem) {
    h2 {
      display: none;
    }
  }
  @media screen and (max-width: 20rem) {
    h2 {
      display: none;
    }
  }
`;

const NavButton = props => {
  const onClickRedirect = () => {
    props.redirect(props.path);
  };

  return <Button {...props} onClick={onClickRedirect} />;
};

export default NavButton;
