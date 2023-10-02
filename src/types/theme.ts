import { Mixins, Palette, Shadows, Transitions, ZIndex } from '@mui/material';
import { Typography } from '@mui/material/styles/createTypography';
import { Theme } from '@mui/system';

export interface BaseTheme extends Theme {
  mixins: Mixins;
  palette: Palette;
  shadows: Shadows;
  transitions: Transitions;
  typography: Typography;
  zIndex: ZIndex;
  unstable_strictMode?: boolean;
}
