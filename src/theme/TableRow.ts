import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

type TMuiTableRow = {
  defaultProps?: ComponentsProps['MuiTableRow'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTableRow'];
  variants?: ComponentsVariants['MuiTableRow'];
};

export const MuiTableRow: TMuiTableRow = {
  variants: [
    {
      props: { id: 'table-head-sticky-footer' },
      style: ({ theme }) => ({
        position: 'sticky',
        bottom: 0,
      }),
    },
  ],
};
