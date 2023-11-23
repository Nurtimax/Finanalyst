import React, { FC } from 'react';
import { Box, styled, Typography } from '@mui/material';
import RegistrImg from '../../assets/icons/19334d4fd3fc6b625204b907041f2e5e-aboard-exit-symbol.png';

interface IFormHeadlinesProps {
  [key: string]: unknown;
}

const StyledFormHeadlines = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(4),
  gap: theme.spacing(2),

  '& img': {
    width: '250px',
    height: '250px'
  },

  '& .title': {
    fontSize: '1.5rem'
  }
}));

const FormHeadlines: FC<IFormHeadlinesProps> = () => {
  return (
    <StyledFormHeadlines>
      <img src={RegistrImg} alt="Form Image" width="50%" height="50%" />
    </StyledFormHeadlines>
  );
};

export default FormHeadlines;
