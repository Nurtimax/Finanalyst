import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

type TMuiTextField = {
  defaultProps?: ComponentsProps['MuiTextField'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTextField'];
  variants?: ComponentsVariants['MuiTextField'];
};

const MuiTextField: TMuiTextField = {
  styleOverrides: {
    root: {},
  },
  variants: [
    {
      props: { variant: 'outlined', id: 'disabledPadding' },
      style: ({ theme }) => ({
        '& input': {
          padding: '4px 0 5px 5px',
        },
      }),
    },
    {
      props: { className: 'form-field' },
      style: ({ theme }) => ({
        '& input': {
          padding: '8px',
        },
      }),
    },
  ],
};

export default MuiTextField;
