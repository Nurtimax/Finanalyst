import React, { FC } from 'react';
import { Box } from '@mui/material';
import Page from 'components/helmet-page';
import { ROUTES_NAVIGATE } from 'routes/paths';

interface IAccountProps {
  [key: string]: unknown;
}

const Account: FC<IAccountProps> = () => {
  return (
    <Page
      title="Account"
      canoncial={ROUTES_NAVIGATE.account}
      description="Account: Description of your user account and settings."
    >
      <Box>Account</Box>
    </Page>
  );
};

export default Account;
