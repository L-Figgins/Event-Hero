import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';

const VrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5%;
`;

const Vrline = styled.div`
  width: 2px;
  height: 50%;
  margin-top: 10px;
  background-color: white;
  margin-left: 35%;
`;

const Vr = () => (
  <VrWrapper>
    <Logo height="30%" width="70%" />
    <Vrline />
  </VrWrapper>
);

export default Vr;
