import { ToastProvider, ToastViewport } from '@tamagui/toast';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { Provider as ReduxProvider } from 'react-redux';
import { AppNavigator } from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/providers/ThemeProvider';
import { store } from './src/redux/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CurrentToast } from './src/components/Toast';

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
    <GestureHandlerRootView>
      <ReduxProvider store={store}>
        <ThemeProvider>
          <ToastProvider>
            <AppNavigator />
            <ToastViewport
              position="absolute"
              top={50}
              left={0}
              right={0}
              padding="$2"
            />
            <CurrentToast />
          </ToastProvider>
        </ThemeProvider>
      </ReduxProvider>
    </GestureHandlerRootView>
  );
}
