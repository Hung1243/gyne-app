import { createAnimations } from '@tamagui/animations-react-native';
import { createSystemFont } from '@tamagui/config/v4';
import { tokens as defaultTokens } from '@tamagui/themes';
import { createTamagui } from 'tamagui';
import { themes } from './src/theme/themes';

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
    mass: 1,
    stiffness: 200,
  },
  fast: {
    type: 'timing',
    duration: 200,
    delay: 0,
  },
  medium: {
    type: 'timing',
    duration: 300,
    delay: 0,
  },
  slow: {
    type: 'timing',
    duration: 600,
    delay: 0,
  },
});

const config = createTamagui({
  animations,
  // =============================================
  tokens: {
    color: {},
    radius: {
      0: 0,
      1: 3,
      2: 5,
      3: 7,
      4: 9,
      true: 9,
      5: 10,
      6: 16,
      7: 19,
      8: 22,
      9: 26,
      10: 34,
      11: 42,
      12: 50,
    },
    zIndex: defaultTokens.zIndex,
    space: defaultTokens.space,
    size: defaultTokens.size,
  },
  // =============================================
  fonts: {
    body: createSystemFont(),
    heading: createSystemFont({ sizeSize: (n) => n * 1.4 }),
  },
  // =============================================
  themes: themes,
  // =============================================
  media: {
    xs: { maxWidth: 660 },
    gtXs: { minWidth: 660 + 1 },
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    md: { maxWidth: 980 },
    gtMd: { minWidth: 980 + 1 },
    lg: { maxWidth: 1120 },
    gtLg: { minWidth: 1120 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },
  settings: {
    defaultFont: 'body',
    fastSchemeChange: false,
    shouldAddPrefersColorThemes: true,
    allowedStyleValues: 'somewhat-strict-web',
    themeClassNameOnRoot: true,
    maxDarkLightNesting: 2,
  },
});

type CustomConfig = typeof config;

// ensure types work
declare module 'tamagui' {
  interface TamaguiCustomConfig extends CustomConfig {}
}

export default config;
