import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import Page from 'components/helmet-page';
import { ROUTES_NAVIGATE } from 'routes/paths';

interface IProfileProps {
  [key: string]: unknown;
}

const StyledProfile = styled(Box)(() => ({}));

const Profile: FC<IProfileProps> = () => {
  return (
    <Page
      title="Profile"
      canoncial={ROUTES_NAVIGATE.profile}
      description="Nurtimax's profile - A brief description of Nurtimax's interests and background."
    >
      <StyledProfile>Profile</StyledProfile>
    </Page>
  );
};

export default Profile;
