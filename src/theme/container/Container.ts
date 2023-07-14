import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

type TMuiContainer = {
  defaultProps?: ComponentsProps['MuiContainer'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiContainer'];
  variants?: ComponentsVariants['MuiContainer'];
};

const MuiContainer: TMuiContainer = {
  styleOverrides: {
    maxWidthLg: {
      '&.MuiContainer-maxWidthLg': {
        maxWidth: '95%',
      },
    },
  },
};

export default MuiContainer;
