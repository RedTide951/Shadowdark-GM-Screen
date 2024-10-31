import { AlignHorizontalLeft } from "@mui/icons-material";
import "./App.css";
import Casing from "./components/Casing";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "montserrat",
    allVariants: {
      textAlign: "left",
    },
    h3: {
      fontSize: "40px",
    },
    h4: {
      fontSize: "28px",
    },
  },
  card: {
    p: 10,
  },
  spacing: 6,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="static">
          <Typography
            variant="h3"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "left",
              padding: "5px",
              paddingLeft: "10px",
            }}
          >
            Shadowdark GM Screen
          </Typography>
        </AppBar>
        <Casing />
      </div>
    </ThemeProvider>
  );
}

export default App;
