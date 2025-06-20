import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // seu azul padrão
    },
    secondary: {
      main: '#f50057', // um rosa para destaques
    },
    background: {
      default: '#f4f6f8', // fundo claro
      paper: '#fff', // fundo de cartões, forms etc
    },
    text: {
      primary: '#333',
      secondary: '#555',
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h5: {
      fontWeight: 600,
      color: '#1976d2',
    },
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8, // cantos arredondados uniformes
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 6px rgb(25 118 210 / 0.2)',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            boxShadow: '0 4px 12px rgb(25 118 210 / 0.4)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          boxShadow: 'inset 0 0 5px rgb(0 0 0 / 0.05)',
          transition: 'box-shadow 0.3s ease',
          borderRadius: 8,
          '&.Mui-focused': {
            boxShadow: '0 0 8px rgb(25 118 210 / 0.5)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgb(25 118 210 / 0.4)',
        },
      },
    },
  },
});

export default theme;