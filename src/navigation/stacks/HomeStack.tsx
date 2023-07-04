import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '~/screens/HomeScreen';
import GenresScreen from '~/screens/GenresScreen';
import PopularScreen from '~/screens/PopularScreen';

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name={'HomeScreen'} component={HomeScreen} />
      <HomeStack.Screen name={'GenresScreen'} component={GenresScreen} />
      <HomeStack.Screen name={'PopularScreen'} component={PopularScreen} />
    </HomeStack.Navigator>
  );
}
