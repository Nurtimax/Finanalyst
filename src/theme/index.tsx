import { createTheme, ThemeProvider } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import { MuiTextField } from './TextField';

interface IThemeProps {
  children: ReactNode;
}

const Theme: FC<IThemeProps> = ({ children }) => {
  const theme = createTheme({
    components: {
      MuiTextField,
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
