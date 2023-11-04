import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import NewFinancialActions from './actions';
import NewTable from '../new-table/Table';

const StyledNewTable = styled(Box)(() => ({
  display: 'grid',
  gap: '1rem'
}));

const MainNewTable: FC = () => {
  return (
    <StyledNewTable>
      <NewFinancialActions />
      <NewTable />
    </StyledNewTable>
  );
};

export default MainNewTable;
