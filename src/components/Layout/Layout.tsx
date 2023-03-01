import React from 'react';
import styled from 'styled-components';

import { Header } from '../Header/Header';
import { Services } from '../Services/Services';

const MainWrapper = styled('div')`
  min-width: 360px;
  max-width: 720px;
  background-color: #ffffff;
  padding: 14px 18px;
  margin: 104px auto;
`;

export const Layout: React.FC = () => {
  return (
    <MainWrapper>
      <Header />
      <Services />
    </MainWrapper>
  );
};
