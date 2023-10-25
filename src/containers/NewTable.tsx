import React, { FC } from 'react';
import { Box, Container, styled } from '@mui/material';
import MainNewTable from '../components/_new-table';
import Page from 'components/helmet-page';
import { ROUTES_NAVIGATE } from 'routes/paths';

interface INewTableProps {
  [key: string]: unknown;
}

const NewTable: FC<INewTableProps> = () => {
  return (
    <Page
      title="New table"
      canoncial={ROUTES_NAVIGATE.newTable}
      description="Explore financial data with our powerful table tools. Compare, analyze, and make informed decisions. Get started now."
    >
      <Box>
        <Container>
          <MainNewTable />
        </Container>
      </Box>
    </Page>
  );
};

export default NewTable;
