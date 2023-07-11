import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import AddStore from './AddStore';

interface INewFinancialActionsProps {
  [key: string]: unknown;
}

const StyledNewFinancialActions = styled(Box)(() => ({
  padding: '1rem',
  display: 'grid',
}));

const NewFinancialActions: FC<INewFinancialActionsProps> = () => {
  return (
    <StyledNewFinancialActions>
      <AddStore />
    </StyledNewFinancialActions>
  );
};

export default NewFinancialActions;
