import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import MainFinancialPlanner from '../components/_financial-planner';
import Page from 'components/helmet-page';
import { ROUTES_NAVIGATE } from 'routes/paths';

interface IFinancialPlannerProps {
  [key: string]: unknown;
}

const FinancialPlanner: FC<IFinancialPlannerProps> = () => {
  return (
    <Page
      title="Financial planner table"
      canoncial={ROUTES_NAVIGATE.financialPlanner}
      description="Manage your finances efficiently with our Financial Planner Table. Organize investments, track expenses, and plan your financial future."
    >
      <Box>
        <Container>
          <MainFinancialPlanner />
        </Container>
      </Box>
    </Page>
  );
};

export default FinancialPlanner;
