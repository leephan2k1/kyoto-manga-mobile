import { Platform, Text } from 'react-native';
import {
  BookmarkIcon,
  HomeIcon,
  MagnifyingIcon,
  UserIcon,
} from '~/components/icons';
import { TAB_BAR_MAPPING } from '~/common/constants';
import HomeStackScreen from '~/navigation/stacks/HomeStack';
import SettingsScreen from '~/screens/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function MainLayoutWithTab() {
  return (
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
          height: Platform.OS === 'ios' ? 90 : 55,
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
        component={HomeStackScreen}
      />
      <Tab.Screen name={'Bookmark'} component={SettingsScreen} />
      <Tab.Screen name={'Search'} component={SettingsScreen} />
      <Tab.Screen name={'Profile'} component={SettingsScreen} />
    </Tab.Navigator>
  );
}
