import React, { FC } from 'react';
import { Box, Container, styled } from '@mui/material';
import MainShedule from '../components/shedule';
import Page from 'components/helmet-page';
import { ROUTES_NAVIGATE } from 'routes/paths';

interface ISheduleProps {
  [key: string]: unknown;
}

const StyledShedule = styled(Box)(() => ({}));

const Shedule: FC<ISheduleProps> = () => {
  return (
    <Page
      title="Shedule"
      canoncial={ROUTES_NAVIGATE.shedule}
      description="Your Schedule Description Goes Here"
    >
      <StyledShedule>
        <Container>
          <MainShedule />
        </Container>
      </StyledShedule>
    </Page>
  );
};

export default Shedule;
