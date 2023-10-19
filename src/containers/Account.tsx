import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import Page from 'components/helmet-page';
import { ROUTES_NAVIGATE } from 'routes/paths';

interface IAccountProps {
  [key: string]: unknown;
}

const StyledAccount = styled(Box)(() => ({}));

const Account: FC<IAccountProps> = () => {
  return (
    <Page
      title="Account"
      canoncial={ROUTES_NAVIGATE.account}
      description="Account: Description of your user account and settings."
    >
      <StyledAccount>Account</StyledAccount>
    </Page>
  );
};

export default Account;
