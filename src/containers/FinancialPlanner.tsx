import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import MainFinancialPlanner from '../components/_financial-planner';

interface IFinancialPlannerProps {
  [key: string]: unknown;
}

const StyledFinancialPlanner = styled(Box)(() => ({}));

const FinancialPlanner: FC<IFinancialPlannerProps> = () => {
  return (
    <StyledFinancialPlanner>
      <MainFinancialPlanner />
    </StyledFinancialPlanner>
  );
};

export default FinancialPlanner;
