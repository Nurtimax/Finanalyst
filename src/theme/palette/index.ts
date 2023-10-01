import { PaletteOptions } from '@mui/material';

interface IPalette {
  light: PaletteOptions;
  dark: PaletteOptions;
}

export const paletteModeText = {
  primary: 'var(--tg-theme-text-color)',
  secondary: 'var(--tg-theme-text-color)',
  disabled: 'var(--tg-theme-text-color)'
};

export const paletteModeBackground = {
  paper: 'var(--tg-theme-bg-color)',
  default: 'var(--tg-theme-bg-color)',
  neutral: 'var(--tg-theme-bg-color)'
};

const palette: IPalette = {
  light: {
    text: paletteModeText,
    background: paletteModeBackground
  },
  dark: {
    text: paletteModeText,
    background: paletteModeBackground
  }
};

export default palette;
