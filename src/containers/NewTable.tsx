import React, { FC } from 'react';
import { Box, Container, styled } from '@mui/material';
import MainNewTable from '../components/_new-table';

interface INewTableProps {
  [key: string]: unknown;
}

const StyledNewTable = styled(Box)(() => ({}));

const NewTable: FC<INewTableProps> = () => {
  return (
    <StyledNewTable>
      <Container>
        <MainNewTable />
      </Container>
    </StyledNewTable>
  );
};

export default NewTable;
