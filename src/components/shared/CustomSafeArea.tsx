import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PropsWithChildren } from 'react';

interface CustomSafeAreaProps extends PropsWithChildren {
  exclude?: 'top' | 'bottom' | 'left' | 'right';
}
export default function CustomSafeArea({
  children,
  exclude,
}: CustomSafeAreaProps) {
  const insets = useSafeAreaInsets();

  //react navigation recommend using hook instead of SafeAreView component
  //https://reactnavigation.org/docs/7.x/handling-safe-area
  return (
    <View
      style={{
        flex: 1,
        // Paddings to handle safe area
        paddingTop: exclude === 'top' ? undefined : insets.top,
        paddingBottom: exclude === 'bottom' ? undefined : insets.bottom,
        paddingLeft: exclude === 'left' ? undefined : insets.left,
        paddingRight: exclude === 'right' ? undefined : insets.right,
        backgroundColor: 'black',
      }}
    >
      {children}
    </View>
  );
}
