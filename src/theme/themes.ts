import { createTheme } from 'tamagui';

const light = createTheme({
  background: 'white',
  backgroundHover: '#f5f5f5',
  backgroundPress: '#eee',
  backgroundFocus: '#f5f5f5',
  color: 'black',
  colorHover: '#444',
  borderColor: '#ddd',
  borderColorHover: '#bbb',
  shadowColor: 'rgba(0,0,0,0.1)',
  shadowColorHover: 'rgba(0,0,0,0.2)',
});

const dark = createTheme({
  background: '#111',
  backgroundHover: '#222',
  backgroundPress: '#333',
  backgroundFocus: '#222',
  color: 'white',
  colorHover: '#ddd',
  borderColor: '#333',
  borderColorHover: '#444',
  shadowColor: 'rgba(0,0,0,0.2)',
  shadowColorHover: 'rgba(0,0,0,0.4)',
});

export const themes = {
  light,
  dark,
} as const;
