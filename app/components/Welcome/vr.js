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
`;

const Vrline = styled.div`
  width: 2px;
  height: 50%;
  margin-top: 10px;
  background-color: rgb(20, 20, 20);
  border: 1px;
`;

const Vr = () => (
  <VrWrapper>
    <Logo height="50px" width="50px" marginLeft="px" />
    <Vrline />
  </VrWrapper>
);

export default Vr;
