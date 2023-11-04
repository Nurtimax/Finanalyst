import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import MainActions from './actions';
import SheduleTable from './SheduleTable';

const StyledShedule = styled(Box)(() => ({
  display: 'grid',
  gap: '2rem'
}));

const MainShedule: FC = () => {
  return (
    <StyledShedule>
      <MainActions />
      <SheduleTable />
    </StyledShedule>
  );
};

export default MainShedule;
