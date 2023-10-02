import { Components, Theme } from '@mui/material';
import Card from './Card';
import { merge } from 'lodash';
import Accordion from './Accordion';
import Typography from './Typography';
import { BaseTheme } from 'types/theme';

const themeComponentOverrides = (theme: Theme): Components<BaseTheme> => {
  const components: Components<BaseTheme> = merge(Card(theme), Accordion(theme), Typography(theme));

  return components;
};

export default themeComponentOverrides;
