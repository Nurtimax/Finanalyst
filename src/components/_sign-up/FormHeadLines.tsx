import React, { FC } from 'react';
import { Box, styled, Typography } from '@mui/material';

interface IFormHeadLinesProps {
  [key: string]: unknown;
}

const StyledFormHeadLines = styled(Box)(() => ({
  textAlign: 'center',
  padding: '1rem 0',
}));

const FormHeadLines: FC<IFormHeadLinesProps> = () => {
  return (
    <StyledFormHeadLines>
      <Typography variant="h5">Sign Up</Typography>
    </StyledFormHeadLines>
  );
};

export default FormHeadLines;
