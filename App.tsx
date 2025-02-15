import { useFonts } from 'expo-font';
import { ThemeProvider } from './src/providers/ThemeProvider';
import { AppNavigator } from './src/navigation/AppNavigator';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  if (!loaded) return null;

  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </ReduxProvider>
  );
}
