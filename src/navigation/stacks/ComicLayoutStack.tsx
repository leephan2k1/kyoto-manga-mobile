import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailComicScreen from '~/screens/DetailComicScreen';

const ComicStack = createNativeStackNavigator();

export default function ComicLayoutStack() {
  return (
    <ComicStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ComicStack.Screen name={'DetailComic'} component={DetailComicScreen} />
    </ComicStack.Navigator>
  );
}
