import { createTheme } from '@mui/material/styles';
import { theme } from './theme';

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.main,
    },
    secondary: {
      main: theme.colors.grey,
    },
  },
  typography: {
    fontFamily: 'Roboto Condensed, sans-serif',
    h2: {
      color: theme.colors.background,
      fontWeight: theme.fontWeights.heading,
      fontSize: theme.fontSizes.large,
      lineHeight: theme.lineHeights.heading,
    },
    h3: {
      color: theme.colors.text,
      fontWeight: theme.fontWeights.heading,
      fontSize: theme.fontSizes.medium,
      lineHeight: theme.lineHeights.heading,
    },
    h4: {
      color: theme.colors.text,
      fontWeight: theme.fontWeights.heading,
      fontSize: theme.fontSizes.small,
      lineHeight: theme.lineHeights.heading,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: '101px',
          padding: '11px 16px',
          fontSize: theme.fontSizes.extraSmall,
          lineHeight: theme.lineHeights.body,
          fontWeight: theme.fontWeights.body,
          transition: theme.animation.transform,
          borderRadius: 0,
          '&:hover': { transform: 'translateY(-5px)' },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          height: '1.2em',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& input': {
            fontSize: theme.fontSizes.extraSmall,
            fontWeight: theme.fontWeights.body,
            lineHeight: theme.lineHeights.body,
            padding: '10px',
            color: 'rgba(0, 0, 0, 0.50)',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            transition: theme.animation.transform,
            '&:hover': { transform: 'translateY(-5px)' },
            '&:focus': {
              boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.5)',
            },
          },
          '& fieldset': { border: 'none' },
        },
      },
    },
  },
});
