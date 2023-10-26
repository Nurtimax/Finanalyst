import 'ignore-styles';
import Babel from '@babel/register';
Babel({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react']
});

import './server.mjs';
