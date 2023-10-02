import { Components, Theme } from '@mui/material';
import { BaseTheme } from '@mui/material/styles/createTheme';
import Card from './Card';
import { merge } from 'lodash';
import Accordion from './Accordion';
import Typography from './Typography';

const themeComponentOverrides = (theme: Theme): Components<BaseTheme> => {
  const components: Components<BaseTheme> = merge(Card(theme), Accordion(theme), Typography(theme));

  console.log(components);

  return components;
};

export default themeComponentOverrides;
