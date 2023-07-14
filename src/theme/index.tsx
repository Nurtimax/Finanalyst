import { createTheme, ThemeProvider } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import { MuiContainer } from './Container';
import { MuiTableRow } from './TableRow';
import { MuiTextField } from './TextField';

interface IThemeProps {
  children: ReactNode;
}

const Theme: FC<IThemeProps> = ({ children }) => {
  const theme = createTheme({
    components: {
      MuiTextField,
      MuiContainer,
      MuiTableRow,
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
