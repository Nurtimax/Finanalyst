import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { MainSignUp } from 'components/_sign-up';
import Page from 'components/helmet-page';
import { ROUTES_NAVIGATE } from 'routes/paths';

interface ISignOutProps {
  [key: string]: unknown;
}

const SignOut: FC<ISignOutProps> = () => {
  return (
    <Page
      title="Sign up"
      canoncial={ROUTES_NAVIGATE.register}
      description="Sign up to unlock exclusive access to our platform. Join now to enjoy our premium services, content, and community. Start your journey today!"
    >
      <Box>
        <MainSignUp />
      </Box>
    </Page>
  );
};

export default SignOut;
