import { Container, createTheme, ThemeProvider } from "@mui/material";
import Table from "./components/Table";

function App() {
  const theme = createTheme({
    components: {
      MuiContainer: {
        styleOverrides: {
          maxWidthLg: {
            "&.MuiContainer-maxWidthLg": {
              maxWidth: "95%",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Table />
      </Container>
    </ThemeProvider>
  );
}

export default App;
