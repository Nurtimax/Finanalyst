import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { MainHeader } from '../../components/_layout';

interface IHeaderProps {
  [key: string]: unknown;
}

const StyledHeader = styled(Box)(() => ({}));

const Header: FC<IHeaderProps> = () => {
  return (
    <StyledHeader>
      <MainHeader />
    </StyledHeader>
  );
};

export default Header;
