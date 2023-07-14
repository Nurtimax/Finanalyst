import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { MainSignUp } from 'components/_sign-up';

interface ISignOutProps {
  [key: string]: unknown;
}

const StyledSignOut = styled(Box)(() => ({}));

const SignOut: FC<ISignOutProps> = () => {
  return (
    <StyledSignOut>
      <MainSignUp />
    </StyledSignOut>
  );
};

export default SignOut;
