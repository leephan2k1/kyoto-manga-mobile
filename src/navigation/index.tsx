import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainLayoutWithTab from '~/navigation/tabs/MainLayoutWithTab';
import ComicLayoutStack from '~/navigation/stacks/ComicLayoutStack';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'MainLayout'} component={MainLayoutWithTab} />
        <Stack.Screen name={'ComicLayout'} component={ComicLayoutStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
