import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

type TMuiTextField = {
  defaultProps?: ComponentsProps['MuiTextField'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTextField'];
  variants?: ComponentsVariants['MuiTextField'];
};

export const MuiTextField: TMuiTextField = {
  styleOverrides: {
    root: {},
  },
  variants: [
    {
      props: { variant: 'outlined', id: 'financial-planner' },
      style: ({ theme }) => ({
        '& input': {
          padding: '4px 0 5px 5px',
        },
      }),
    },
  ],
};
