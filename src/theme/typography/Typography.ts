import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

type TMuiTypography = {
  defaultProps?: ComponentsProps['MuiTypography'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTypography'];
  variants?: ComponentsVariants['MuiTypography'];
};

const MuiTypography: TMuiTypography = {
  variants: [
    {
      props: { variant: 'h6' },
      style: ({ theme }) => ({
        marginRight: 2,
        flexGrow: 1,
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
        flex: 'none',
        [theme.breakpoints.down('md')]: {
          display: 'block',
        },
        [theme.breakpoints.up('xs')]: {
          display: 'flex',
        },
      }),
    },
  ],
};

export default MuiTypography;
