import { createTheme, CssBaseline, Theme as MuiTheme, ThemeProvider } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import themeComponentOverrides from './overrides';
import GlobalStyle from './global-style';

interface IThemeProps {
  children: ReactNode;
}

const Theme: FC<IThemeProps> = ({ children }) => {
  const theme: MuiTheme = createTheme({});
  theme.components = themeComponentOverrides(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
