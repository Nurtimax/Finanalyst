import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import { MuiContainer } from './container';
import { MuiTableRow } from './table-row';
import { MuiTextField } from './text-field';
import { MuiTypography } from './typography';
import palette from './palette';
import GlobalStyle from './global-style';

interface IThemeProps {
  children: ReactNode;
}

const Theme: FC<IThemeProps> = ({ children }) => {
  const theme = createTheme({
    components: {
      MuiTextField,
      MuiContainer,
      MuiTableRow,
      MuiTypography
    },
    palette: palette.dark
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
