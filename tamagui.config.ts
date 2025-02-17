import { createTamagui } from '@tamagui/core';
import { createAnimations } from '@tamagui/animations-react-native';
import {
  themes as tamaguiThemes,
  tokens as defaultTokens,
} from '@tamagui/themes';
import { createInterFont } from '@tamagui/font-inter';
import { shorthands } from '@tamagui/shorthands';
import { createMedia } from '@tamagui/react-native-media-driver';

/** === ANIMATIONS CONFIG === */
const animations = createAnimations({
  bouncy: {
    type: 'spring',
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: 'spring',
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
});

/** === TOKENS CONFIG === */
const tokens = {
  ...defaultTokens,
  size: {
    0: 0,
    0.25: 2,
    0.5: 4,
    0.75: 8,
    1: 10,
    1.5: 12,
    2: 14,
    2.5: 16,
    3: 20,
    3.5: 24,
    4: 28,
    5: 36,
    6: 48,
    7: 60,
    8: 72,
    9: 88,
    10: 104,
    11: 120,
    12: 140,
    13: 160,
    14: 180,
    15: 200,
  },
  space: {
    0: 0,
    0.25: 2,
    0.5: 4,
    0.75: 8,
    1: 10,
    1.5: 12,
    2: 14,
    2.5: 16,
    3: 20,
    3.5: 24,
    4: 28,
    5: 36,
    6: 48,
    7: 60,
    8: 72,
    9: 88,
    10: 104,
  },
  radius: {
    0: 0,
    0.5: 2,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
  },
  zIndex: {
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
  },
  color: {
    ...defaultTokens.color,
    textLight: 'rgba(0,0,0,0.85)',
    textDark: 'rgba(255,255,255,0.85)',
    primary: '#007AFF',
    secondary: '#34C759',
    backgroundLight: '#F9F9F9',
    backgroundDark: '#1C1C1E',
    border: '#D1D1D6',
  },
};

/** === THEMES CONFIG === */
const themes = {
  ...tamaguiThemes,
  light: {
    background: tokens.color.backgroundLight,
    color: tokens.color.textLight,
    primary: tokens.color.primary,
    secondary: tokens.color.secondary,
    borderColor: tokens.color.border,
    buttonBackground: tokens.color.primary,
    buttonColor: 'white',
    buttonBorder: 'transparent',
    buttonBackgroundHover: tokens.color.primary + 'dd',
    buttonColorHover: 'white',
    buttonBorderHover: 'transparent',
  },
  dark: {
    background: tokens.color.backgroundDark,
    color: tokens.color.textDark,
    primary: tokens.color.primary,
    secondary: tokens.color.secondary,
    borderColor: tokens.color.border,
    buttonBackground: tokens.color.primary,
    buttonColor: 'white',
    buttonBorder: 'transparent',
    buttonBackgroundHover: tokens.color.primary + 'dd',
    buttonColorHover: 'white',
    buttonBorderHover: 'transparent',
  },
};

/** === FONT CONFIG === */
const interFont = createInterFont();

/** === MEDIA CONFIG === */
const media = createMedia({
  xs: { maxWidth: 660 },
  sm: { maxWidth: 800 },
  md: { maxWidth: 1020 },
  lg: { maxWidth: 1280 },
  xl: { maxWidth: 1420 },
  xxl: { maxWidth: 1600 },
  gtXs: { minWidth: 660 + 1 },
  gtSm: { minWidth: 800 + 1 },
  gtMd: { minWidth: 1020 + 1 },
  gtLg: { minWidth: 1280 + 1 },
  short: { maxHeight: 820 },
  tall: { minHeight: 820 },
  hoverNone: { hover: 'none' },
  pointerCoarse: { pointer: 'coarse' },
});

/** === CREATE CONFIG === */
const config = createTamagui({
  animations,
  defaultTheme: 'light',
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    heading: interFont,
    body: interFont,
  },
  themes: {
    light: themes.light,
    dark: themes.dark,
  },
  tokens,
  media,
});

export type AppConfig = typeof config;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
