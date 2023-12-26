import { createTheme } from '@mui/material';

const colorPrimary = '#5E3FB7';
const colorSecondary = '#F3F4F8';
const colorText = '#A19DA2';
const radius = '10px';

export const theme = createTheme({
  palette: {
    primary: {
      main: colorPrimary,
    },
    secondary: {
      main: colorSecondary,
      dark: '#DEDEDE',
    },
    grey: {
      200: '#F3F4F8',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflow: 'hidden',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          maxWidth: 'initial !important',
          flex: 'auto',
          paddingLeft: '0 !important',
          paddingRight: '0 !important',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: colorText,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: 'none',
          letterSpacing: 'normal',
          height: '50px',
          borderRadius: radius,
        },
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          letterSpacing: 'normal',
          minWidth: '140px',
          height: '50px',
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: colorText,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: radius,
          ':hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: colorText,
            },
          },
          '&.Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#d32f2f',
            },
          },
          '&.Mui-disabled': {
            borderColor: colorText,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: colorText,
            },
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: colorText,
            },
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: colorText,
          },
          color: colorText,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: colorText,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: colorText,
          border: 'none',
          borderRadius: '30px',
          alignItems: 'center',
          height: '44px',
          fontSize: '1rem',
          transition: 'all .8s linear 0.2s',
        },
        avatar: {
          width: 38,
          height: 38,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: '#d32f2f',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: colorText,
        },
      },
    },
  },
});
