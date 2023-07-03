import React, { FC } from 'react';
import { Box, Container, styled } from '@mui/material';
import Table from '../components/Table';

interface IHomeProps {
  [key: string]: unknown;
}

const StyledHome = styled(Box)(() => ({}));

const Home: FC<IHomeProps> = () => {
  return (
    <StyledHome>
      <Container>
        <Table />
      </Container>
    </StyledHome>
  );
};

export default Home;
