import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '~/screens/HomeScreen';
import SettingsScreen from '~/screens/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BookmarkIcon,
  HomeIcon,
  MagnifyingIcon,
  UserIcon,
} from '~/components/icons';
import { TAB_BAR_MAPPING } from '~/common/constants';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return <HomeIcon width={24} height={24} color={color} />;
            }

            if (route.name === 'Profile') {
              return <UserIcon width={24} height={24} color={color} />;
            }

            if (route.name === 'Search') {
              return <MagnifyingIcon width={24} height={24} color={color} />;
            }

            if (route.name === 'Bookmark') {
              return <BookmarkIcon width={24} height={24} color={color} />;
            }
          },
          tabBarActiveTintColor: '#f5c702',
          tabBarInactiveTintColor: '#9ca3af',
          headerShown: false,
          tabBarStyle: {
            height: 55,
            backgroundColor: '#1c1917',
            borderTopWidth: 0,
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                className={`text-white/80 text-sm ${
                  focused ? 'text-primary' : ''
                }`}
              >
                {TAB_BAR_MAPPING[route.name]}
              </Text>
            );
          },
        })}
      >
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name={'Home'}
          component={HomeScreen}
        />
        <Tab.Screen name={'Bookmark'} component={SettingsScreen} />
        <Tab.Screen name={'Search'} component={SettingsScreen} />
        <Tab.Screen name={'Profile'} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
