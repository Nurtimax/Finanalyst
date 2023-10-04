import { Components, Theme } from '@mui/material';
import { MUI_CLASSNAME } from 'theme/constants/overrides';
import { TYPOGRAPHY_OPTIONS } from './Typography';
import { BaseTheme } from 'types/theme';

export const ACCORDION_OPTIONS = {
  classNames: {
    root: '.MuiAccordion-root',
    square: '.MuiAccordion-rounded',
    disableGutters: '.MuiAccordion-gutters',
    region: '.MuiAccordion-region'
  }
};

const Accordion = (theme: Theme): Components<BaseTheme> => {
  const accordion: Components<BaseTheme> = {
    MuiAccordion: {
      styleOverrides: {
        root: {
          [`&${MUI_CLASSNAME.expanded}`]: {
            boxShadow: theme.shadows[0],
            borderRadius: theme.shape.borderRadius
          },
          [`&${MUI_CLASSNAME.disabled}`]: {
            background: 'transparent'
          }
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(1),
          [`&${MUI_CLASSNAME.disabled}`]: {
            opacity: 1,
            color: theme.palette.action.disabled,
            [`&${TYPOGRAPHY_OPTIONS.classNames.root}`]: {
              color: 'inherit'
            }
          },
          expandIconWrapper: {
            color: 'inherit'
          }
        }
      }
    },
    MuiAccordionActions: {},
    MuiAccordionDetails: {}
  };

  return accordion;
};

export default Accordion;
