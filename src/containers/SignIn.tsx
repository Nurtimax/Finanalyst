import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { MainSignIn } from 'components/_sign-in';

interface ISignInProps {
  [key: string]: unknown;
}

const StyledSignIn = styled(Box)(() => ({}));

const SignIn: FC<ISignInProps> = () => {
  return (
    <StyledSignIn>
      <MainSignIn />
    </StyledSignIn>
  );
};

export default SignIn;
