import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

type TCard = {
  MuiCard?: {
    defaultProps?: ComponentsProps['MuiCard'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiCard'];
    variants?: ComponentsVariants['MuiCard'];
  };
  MuiCardActionArea?: {
    defaultProps?: ComponentsProps['MuiCardActionArea'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiCardActionArea'];
    variants?: ComponentsVariants['MuiCardActionArea'];
  };
  MuiCardActions?: {
    defaultProps?: ComponentsProps['MuiCardActions'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiCardActions'];
    variants?: ComponentsVariants['MuiCardActions'];
  };
  MuiCardContent?: {
    defaultProps?: ComponentsProps['MuiCardContent'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiCardContent'];
    variants?: ComponentsVariants['MuiCardContent'];
  };
  MuiCardHeader?: {
    defaultProps?: ComponentsProps['MuiCardHeader'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiCardHeader'];
    variants?: ComponentsVariants['MuiCardHeader'];
  };
  MuiCardMedia?: {
    defaultProps?: ComponentsProps['MuiCardMedia'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiCardMedia'];
    variants?: ComponentsVariants['MuiCardMedia'];
  };
};

const Card = (theme: Theme): TCard => {
  return {
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
};

export default Card;
