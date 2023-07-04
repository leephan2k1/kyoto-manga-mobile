import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '~/screens/HomeScreen';
import GenresScreen from '~/screens/GenresScreen';

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
    </HomeStack.Navigator>
  );
}
