import { Components, Theme } from '@mui/material';
import { BaseTheme } from 'types/theme';

export const TYPOGRAPHY_OPTIONS = {
  classNames: {
    root: '.MuiTypography-root',
    body2: '.MuiTypography-body2',
    body1: '.MuiTypography-body1',
    caption: '.MuiTypography-caption',
    button: '.MuiTypography-button',
    h1: '.MuiTypography-h1',
    h2: '.MuiTypography-h2',
    h3: '.MuiTypography-h3',
    h4: '.MuiTypography-h4',
    h5: '.MuiTypography-h5',
    h6: '.MuiTypography-h6',
    subtitle1: '.MuiTypography-subtitle1',
    subtitle2: '.MuiTypography-subtitle2',
    overline: '.MuiTypography-overline',
    inherit: '.MuiTypography-inherit',
    alignLeft: '.MuiTypography-alignLeft',
    alignCenter: '.MuiTypography-alignCenter',
    alignRight: '.MuiTypography-alignRight',
    justify: '.MuiTypography-alignJustify',
    nowrap: '.MuiTypography-noWrap',
    gutterBottom: '.MuiTypography-gutterBottom',
    paragraph: '.MuiTypography-paragraph'
  }
};

const Typography = (theme: Theme): Components<BaseTheme> => {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(1)
        }
      }
    }
  };
};

export default Typography;
