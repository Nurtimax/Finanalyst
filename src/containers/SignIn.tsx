import React, { FC } from 'react';
import { Box } from '@mui/material';
import { MainSignIn } from 'components/_sign-in';
import Page from 'components/helmet-page';
import { ROUTES_NAVIGATE } from 'routes/paths';

interface ISignInProps {
  [key: string]: unknown;
}

const SignIn: FC<ISignInProps> = () => {
  return (
    <Page
      title="Sign in"
      canoncial={ROUTES_NAVIGATE.logIn}
      description="Sign in to your account to access your profile and manage your account settings. Get started with our secure sign-in process now."
    >
      <Box>
        <MainSignIn />
      </Box>
    </Page>
  );
};

export default SignIn;
