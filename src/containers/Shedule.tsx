import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import MainShedule from '../components/shedule';

interface ISheduleProps {
  [key: string]: unknown;
}

const StyledShedule = styled(Box)(() => ({}));

const Shedule: FC<ISheduleProps> = () => {
  return (
    <StyledShedule>
      <MainShedule />
    </StyledShedule>
  );
};

export default Shedule;
