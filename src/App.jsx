import { AlignHorizontalLeft } from '@mui/icons-material';
import './App.css';
import Casing from './components/Casing';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'montserrat',
    result: {
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '1.5rem',
    },
  },
  card: {
    p: 10
  },
  spacing: 8,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Casing />
      </div>
    </ThemeProvider>
  );
}

export default App;
