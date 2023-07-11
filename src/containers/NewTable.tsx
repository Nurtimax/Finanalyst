import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import MainNewTable from '../components/_new-table';

interface INewTableProps {
  [key: string]: unknown;
}

const StyledNewTable = styled(Box)(() => ({}));

const NewTable: FC<INewTableProps> = () => {
  return (
    <StyledNewTable>
      <MainNewTable />
    </StyledNewTable>
  );
};

export default NewTable;
