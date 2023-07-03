import { Container, createTheme, ThemeProvider } from '@mui/material';
import BasicTabs from './components/Tab';

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
      <Container>
        <BasicTabs />
      </Container>
    </ThemeProvider>
  );
}

export default App;
