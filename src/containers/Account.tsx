import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

interface IAccountProps {
  [key: string]: unknown;
}

const StyledAccount = styled(Box)(() => ({}));

const Account: FC<IAccountProps> = () => {
  return <StyledAccount>Account</StyledAccount>;
};

export default Account;
