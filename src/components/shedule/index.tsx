import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

interface ISheduleProps {
  [key: string]: unknown;
}

const StyledShedule = styled(Box)(() => ({
  display: 'grid',
  gap: '2rem',
}));

const Shedule: FC<ISheduleProps> = () => {
  return <StyledShedule>Shedule in the process </StyledShedule>;
};

export default Shedule;
