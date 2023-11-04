import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import SignUpForm from './SignUpForm';

const StyledMainSignUp = styled(Box)(() => ({
  background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
  backgroundSize: '400% 400%',
  animation: 'BACKGROUND_GRADIENT_ANIMATION 15s ease infinite',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const MainSignUp: FC = () => {
  return (
    <StyledMainSignUp>
      <SignUpForm />
    </StyledMainSignUp>
  );
};

export default MainSignUp;
