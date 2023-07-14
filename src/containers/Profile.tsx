import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

interface IProfileProps {
  [key: string]: unknown;
}

const StyledProfile = styled(Box)(() => ({}));

const Profile: FC<IProfileProps> = () => {
  return <StyledProfile>Profile</StyledProfile>;
};

export default Profile;
