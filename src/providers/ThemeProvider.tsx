import { TamaguiProvider, Theme } from 'tamagui';
import config from '../../tamagui.config';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <TamaguiProvider config={config}>
      <Theme name="light">{children}</Theme>
    </TamaguiProvider>
  );
}
