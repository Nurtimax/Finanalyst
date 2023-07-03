import { createTheme, ThemeProvider } from '@mui/material';
import AppRouter from './router/AppRouter';

function App() {
  const theme = createTheme({
    components: {
      MuiContainer: {
        styleOverrides: {
          maxWidthLg: {
            '&.MuiContainer-maxWidthLg': {
              maxWidth: '95%',
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
