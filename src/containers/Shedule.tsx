import React, { FC } from 'react';
import { Box, Container, styled } from '@mui/material';
import MainShedule from '../components/shedule';

interface ISheduleProps {
  [key: string]: unknown;
}

const StyledShedule = styled(Box)(() => ({}));

const Shedule: FC<ISheduleProps> = () => {
  return (
    <StyledShedule>
      <Container>
        <MainShedule />
      </Container>
    </StyledShedule>
  );
};

export default Shedule;
