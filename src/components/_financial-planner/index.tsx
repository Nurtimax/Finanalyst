import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import Table from '../table/Table';
import FinancialActions from './actions';

interface IMainFinancialPlannerProps {
  [key: string]: unknown;
}

const StyledMainFinancialPlanner = styled(Box)(() => ({
  display: 'grid',
  gap: '1rem',
}));

const MainFinancialPlanner: FC<IMainFinancialPlannerProps> = () => {
  return (
    <StyledMainFinancialPlanner>
      <FinancialActions />
      <Table />
    </StyledMainFinancialPlanner>
  );
};

export default MainFinancialPlanner;
