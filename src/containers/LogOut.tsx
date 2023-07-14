import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

interface ILogOutProps {
  [key: string]: unknown;
}

const StyledLogOut = styled(Box)(() => ({}));

const LogOut: FC<ILogOutProps> = () => {
  return <StyledLogOut>LogOut</StyledLogOut>;
};

export default LogOut;
