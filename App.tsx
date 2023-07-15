import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { store } from '~/store';
import Navigation from '~/navigation';
import { TamaguiProvider } from 'tamagui';
import tamaguiConfig from './tamagui.config';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StoreProvider store={store}>
        <TamaguiProvider config={tamaguiConfig}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </TamaguiProvider>
      </StoreProvider>
    </NavigationContainer>
  );
}
