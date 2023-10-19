import React, { FC } from 'react';
import { Box, Container, styled, Toolbar } from '@mui/material';
import Header from './header';
import Main from './main';
import { Outlet } from 'react-router-dom';
import Breadcrumbs from 'components/breadcrumbs';

interface ILayoutProps {
  [key: string]: unknown;
}

const StyledLayout = styled(Box)(() => ({}));

const Layout: FC<ILayoutProps> = () => {
  return (
    <StyledLayout>
      <Header />
      <Toolbar />

      <Container sx={{ pt: 2 }}>
        <Breadcrumbs />
      </Container>

      <Main>
        <Outlet />
      </Main>
    </StyledLayout>
  );
};

export default Layout;
