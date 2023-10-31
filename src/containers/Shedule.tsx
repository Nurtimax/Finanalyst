import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import MainShedule from '../components/shedule';
import Page from 'components/helmet-page';
import { ROUTES_NAVIGATE } from 'routes/paths';

interface ISheduleProps {
  [key: string]: unknown;
}

const Shedule: FC<ISheduleProps> = () => {
  return (
    <Page
      title="Shedule"
      canoncial={ROUTES_NAVIGATE.shedule}
      description="Your Schedule Description Goes Here"
    >
      <Box>
        <Container>
          <MainShedule />
        </Container>
      </Box>
    </Page>
  );
};

export default Shedule;
