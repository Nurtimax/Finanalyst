import React, { FC, ReactNode } from 'react';
import { styled } from '@mui/material';

interface IMainProps {
  [key: string]: unknown;
  children: ReactNode;
}

const StyledMain = styled('main')(() => ({
  padding: '1rem 0 0'
}));

const Main: FC<IMainProps> = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
