import { Theme } from '@mui/material';
import { merge } from 'lodash';
import Typography from './Typography';
import Accordion from './Accordion';

const themeComponentOverrides = (theme: Theme) => {
  return merge(Typography(theme), Accordion(theme));
};

export default themeComponentOverrides;
