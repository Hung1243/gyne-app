import { TamaguiProvider } from 'tamagui';
import config from '../configs/tamagui.config';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <TamaguiProvider config={config}>{children}</TamaguiProvider>;
}
