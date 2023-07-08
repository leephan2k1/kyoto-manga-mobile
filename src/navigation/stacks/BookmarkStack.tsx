import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookmarkScreen from '~/screens/BookmarkScreen';
import CollectionScreen from '~/screens/CollectionScreen';
import HistoryScreen from '~/screens/HistoryScreen';

const BookmarkStack = createNativeStackNavigator();

export default function BookmarkStackScreen() {
  return (
    <BookmarkStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BookmarkStack.Screen
        name={'BookmarkScreen'}
        component={BookmarkScreen}
      />
      <BookmarkStack.Screen
        name={'CollectionScreen'}
        component={CollectionScreen}
      />
      <BookmarkStack.Screen name={'HistoryScreen'} component={HistoryScreen} />
    </BookmarkStack.Navigator>
  );
}
