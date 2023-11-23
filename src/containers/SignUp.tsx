import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { MainSignUp } from 'components/_sign-up';

const StyledSignOut = styled(Box)({});

const SignOut: FC = () => {
  return (
    <StyledSignOut>
      <MainSignUp />
    </StyledSignOut>
  );
};

export default SignOut;
