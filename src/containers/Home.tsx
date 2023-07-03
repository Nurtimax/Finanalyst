import React, { FC } from 'react';
import { Box, Container, styled } from '@mui/material';
import BasicTabs from '../components/Tab';

interface IHomeProps {
  [key: string]: unknown;
}

const StyledHome = styled(Box)(() => ({}));

const Home: FC<IHomeProps> = () => {
  return (
    <StyledHome>
      <Container>
        <BasicTabs />
      </Container>
    </StyledHome>
  );
};

export default Home;
