import { createTheme, Theme as MuiTheme, ThemeProvider } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import themeComponentOverrides from './overrides';

interface IThemeProps {
  children: ReactNode;
}

const Theme: FC<IThemeProps> = ({ children }) => {
  const theme: MuiTheme = createTheme({});
  theme.components = themeComponentOverrides(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
