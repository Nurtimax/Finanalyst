import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import Table from '../table/Table';

const StyledMainFinancialPlanner = styled(Box)(() => ({
  display: 'grid',
  gap: '1rem'
}));

const MainFinancialPlanner: FC = () => {
  return (
    <StyledMainFinancialPlanner>
      <Table />
    </StyledMainFinancialPlanner>
  );
};

export default MainFinancialPlanner;
