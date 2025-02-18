import * as Colors from '@tamagui/colors';
import { createThemes, defaultComponentThemes } from '@tamagui/theme-builder';

export const darkPalette = [
  'hsla(332, 57%, 5%, 1)',
  'hsla(332, 34%, 18%, 1)',
  'hsla(332, 42%, 27%, 1)',
  'hsla(332, 51%, 36%, 1)',
  'hsla(333, 59%, 45%, 1)',
  'hsla(333, 67%, 53%, 1)',
  'hsla(333, 76%, 62%, 1)',
  'hsla(334, 84%, 71%, 1)',
  'hsla(334, 92%, 80%, 1)',
  'hsla(334, 56%, 65%, 1)',
  'hsla(274, 100%, 93%, 1)',
  'hsla(274, 100%, 97%, 1)',
];
export const lightPalette = [
  'hsla(340, 100%, 99%, 1)',
  'hsla(334, 92%, 94%, 1)',
  'hsla(334, 92%, 92%, 1)',
  'hsla(334, 92%, 90%, 1)',
  'hsla(334, 92%, 88%, 1)',
  'hsla(334, 92%, 86%, 1)',
  'hsla(334, 92%, 84%, 1)',
  'hsla(334, 92%, 82%, 1)',
  'hsla(334, 92%, 80%, 1)',
  'hsla(334, 56%, 65%, 1)',
  'hsla(265, 33%, 61%, 1)',
  'hsla(265, 33%, 39%, 1)',
];
export const darkAccentPalette = [
  'hsla(332, 60%, 5%, 1)',
  'hsla(0, 32%, 17%, 1)',
  'hsla(0, 41%, 26%, 1)',
  'hsla(0, 51%, 36%, 1)',
  'hsla(1, 60%, 45%, 1)',
  'hsla(1, 69%, 55%, 1)',
  'hsla(1, 79%, 64%, 1)',
  'hsla(1, 88%, 73%, 1)',
  'hsla(1, 98%, 83%, 1)',
  'hsla(2, 67%, 60%, 1)',
  'hsla(334, 78%, 90%, 1)',
  'hsla(334, 78%, 91%, 1)',
];
export const lightAccentPalette = [
  'hsla(336, 100%, 98%, 1)',
  'hsla(1, 98%, 96%, 1)',
  'hsla(1, 98%, 94%, 1)',
  'hsla(1, 98%, 92%, 1)',
  'hsla(1, 98%, 91%, 1)',
  'hsla(1, 98%, 89%, 1)',
  'hsla(1, 98%, 87%, 1)',
  'hsla(1, 98%, 85%, 1)',
  'hsla(1, 98%, 83%, 1)',
  'hsla(2, 67%, 66%, 1)',
  'hsla(334, 78%, 69%, 1)',
  'hsla(334, 78%, 54%, 1)',
];

const lightShadows = {
  shadow1: 'rgba(0,0,0,0.04)',
  shadow2: 'rgba(0,0,0,0.08)',
  shadow3: 'rgba(0,0,0,0.16)',
  shadow4: 'rgba(0,0,0,0.24)',
  shadow5: 'rgba(0,0,0,0.32)',
  shadow6: 'rgba(0,0,0,0.4)',
};

const darkShadows = {
  shadow1: 'rgba(0,0,0,0.2)',
  shadow2: 'rgba(0,0,0,0.3)',
  shadow3: 'rgba(0,0,0,0.4)',
  shadow4: 'rgba(0,0,0,0.5)',
  shadow5: 'rgba(0,0,0,0.6)',
  shadow6: 'rgba(0,0,0,0.7)',
};

const builtThemes = createThemes({
  componentThemes: defaultComponentThemes,

  base: {
    palette: {
      dark: darkPalette,
      light: lightPalette,
    },

    extra: {
      light: {
        ...lightShadows,
        shadowColor: lightShadows.shadow1,
      },
      dark: {
        ...darkShadows,
        shadowColor: darkShadows.shadow1,
      },
    },
  },

  accent: {
    palette: {
      dark: darkAccentPalette,
      light: lightAccentPalette,
    },
  },

  childrenThemes: {
    warning: {
      palette: {
        dark: Object.values(Colors.yellowDark),
        light: Object.values(Colors.yellow),
      },
    },

    error: {
      palette: {
        dark: Object.values(Colors.redDark),
        light: Object.values(Colors.red),
      },
    },

    success: {
      palette: {
        dark: Object.values(Colors.greenDark),
        light: Object.values(Colors.green),
      },
    },
  },
});

export type Themes = typeof builtThemes;

// this is optional, but saves client-side JS bundle size by leaving out themes on client.
// tamagui automatically hydrates themes from css back into JS for you and the tamagui
// bundler plugins automate setting TAMAGUI_ENVIRONMENT.

export const themes: Themes =
  process.env.TAMAGUI_ENVIRONMENT === 'client' &&
  process.env.NODE_ENV === 'production'
    ? ({} as any)
    : (builtThemes as any);
