import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { useFonts } from 'expo-font';
import { store } from './src/redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from './src/providers/ThemeProvider';
import { AppNavigator } from './src/navigation/AppNavigator';
import { ToastProvider, ToastViewport } from '@tamagui/toast';
import { YStack } from 'tamagui';

export default function App() {
  console.log('🏁 App mounting');
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  if (!loaded) {
    console.log('⏳ Fonts not loaded');
    return null;
  }
  console.log('✅ Fonts loaded');

  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <ToastProvider>
          <AppNavigator />
          <ToastViewport
            multipleToasts
            position="absolute"
            top={50}
            left={0}
            right={0}
            padding="$2"
          />
        </ToastProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}
