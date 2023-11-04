import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import AddStore from './AddStore';

const StyledNewFinancialActions = styled(Box)(() => ({
  padding: '1rem 0',
  display: 'grid'
}));

const NewFinancialActions: FC = () => {
  return (
    <StyledNewFinancialActions>
      <AddStore />
    </StyledNewFinancialActions>
  );
};

export default NewFinancialActions;
