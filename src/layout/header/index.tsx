import React, { FC } from 'react';
import { Box } from '@mui/material';
import { MainHeader } from '../../components/_layout';

interface IHeaderProps {
  [key: string]: unknown;
}

const Header: FC<IHeaderProps> = () => {
  return (
    <Box>
      <MainHeader />
    </Box>
  );
};

export default Header;
