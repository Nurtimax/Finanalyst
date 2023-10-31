import React, { FC } from 'react';
import { Box, Container, Toolbar } from '@mui/material';
import Header from './header';
import Main from './main';
import { Outlet } from 'react-router-dom';
import Breadcrumbs from 'components/breadcrumbs';

interface ILayoutProps {
  [key: string]: unknown;
}

const Layout: FC<ILayoutProps> = () => {
  return (
    <Box>
      <Header />
      <Toolbar />

      <Container sx={{ pt: 2 }}>
        <Breadcrumbs />
      </Container>

      <Main>
        <Outlet />
      </Main>
    </Box>
  );
};

export default Layout;
