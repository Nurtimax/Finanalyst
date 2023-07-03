import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

interface IAddTimesProps {
  [key: string]: unknown;
}

const StyledAddTimes = styled(Box)(() => ({}));

const AddTimes: FC<IAddTimesProps> = () => {
  return <StyledAddTimes>AddTimes</StyledAddTimes>;
};

export default AddTimes;
