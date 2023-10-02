import { Components, Theme } from '@mui/material';
import { BaseTheme } from '@mui/material/styles/createTheme';

const Card = (theme: Theme): Components<BaseTheme> => {
  const components: Components<BaseTheme> = {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.shadows[1],
          borderRadius: theme.shape.borderRadius,
          position: 'relative',
          zIndex: 0
        }
      }
    },
    MuiCardActionArea: {},
    MuiCardActions: {},
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3)
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: {
          variant: 'body2',
          marginTop: theme.spacing(0.5)
        }
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0)
        }
      }
    },
    MuiCardMedia: {}
  };

  return components;
};

export default Card;
