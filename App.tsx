import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { store } from '~/store';
import Navigation from '~/navigation';

export default function App() {
  return (
    <StoreProvider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
