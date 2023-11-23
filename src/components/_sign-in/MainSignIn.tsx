import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import SignInForm from './SignInForm';

interface IMainSignInProps {
  [key: string]: unknown;
}

const StyledMainSignIn = styled(Box)(() => ({
  background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
  backgroundSize: '400% 400%',
  animation: 'BACKGROUND_GRADIENT_ANIMATION 15s ease infinite',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const MainSignIn: FC<IMainSignInProps> = () => {
  return (
    <StyledMainSignIn>
      <SignInForm />
    </StyledMainSignIn>
  );
};

export default MainSignIn;
