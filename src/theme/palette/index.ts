import { PaletteOptions } from '@mui/material';

interface IPalette {
  light: PaletteOptions;
  dark: PaletteOptions;
}

export const paletteModeText = {};

export const paletteModeBackground = {};

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
