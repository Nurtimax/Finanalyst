import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import MainActions from './actions';
import SheduleTable from './SheduleTable';

interface ISheduleProps {
  [key: string]: unknown;
}

const StyledShedule = styled(Box)(() => ({
  display: 'grid',
  gap: '2rem',
}));

const Shedule: FC<ISheduleProps> = () => {
  return (
    <StyledShedule>
      <MainActions />
      <SheduleTable />
    </StyledShedule>
  );
};

export default Shedule;
