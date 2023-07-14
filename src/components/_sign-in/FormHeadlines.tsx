import React, { FC } from 'react';
import { Box, styled, Typography } from '@mui/material';

interface IFormHeadlinesProps {
  [key: string]: unknown;
}

const StyledFormHeadlines = styled(Box)(() => ({
  textAlign: 'center',
  padding: '1rem 0',
}));

const FormHeadlines: FC<IFormHeadlinesProps> = () => {
  return (
    <StyledFormHeadlines>
      <Typography variant="h5">Sign In</Typography>
    </StyledFormHeadlines>
  );
};

export default FormHeadlines;
