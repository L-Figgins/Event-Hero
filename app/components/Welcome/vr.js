import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';

const VrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 5%;
  height: 100%;

  img {
    max-height: 6rem;
    max-width: 6rem;
  }
  @media screen and (max-width: 30rem) {
    img {
      display: none;
    }
  }
`;

const Vrline = styled.div`
  width: 2px;
  height: 50%;
  margin-top: 10px;
  background-color: white;
  border: 1px;
`;

const Vr = () => (
  <VrWrapper>
    <Logo height="80%" width="80%" />
    <Vrline />
  </VrWrapper>
);

export default Vr;
