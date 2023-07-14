import React, { FC } from 'react';
import { Box, styled, Toolbar } from '@mui/material';
import Header from './header';
import Main from './main';
import { Outlet } from 'react-router-dom';

interface ILayoutProps {
  [key: string]: unknown;
}

const StyledLayout = styled(Box)(() => ({}));

const Layout: FC<ILayoutProps> = () => {
  return (
    <StyledLayout>
      <Header />
      <Toolbar />
      <Main>
        <Outlet />
      </Main>
    </StyledLayout>
  );
};

export default Layout;
