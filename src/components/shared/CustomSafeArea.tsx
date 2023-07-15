import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PropsWithChildren } from 'react';
import { Direction } from '~/common/types/direction';

interface CustomSafeAreaProps extends PropsWithChildren {
  excludes?: Partial<{ [key in Direction]: boolean }>;
}
export default function CustomSafeArea({
  children,
  excludes,
}: CustomSafeAreaProps) {
  const insets = useSafeAreaInsets();

  //react navigation recommend using hook instead of SafeAreView component
  //https://reactnavigation.org/docs/7.x/handling-safe-area
  return (
    <View
      style={{
        flex: 1,
        // Paddings to handle safe area
        paddingTop: excludes?.top ? undefined : insets.top,
        paddingBottom: excludes?.bottom ? undefined : insets.bottom,
        paddingLeft: excludes?.left ? undefined : insets.left,
        paddingRight: excludes?.right ? undefined : insets.right,
        backgroundColor: 'black',
      }}
    >
      {children}
    </View>
  );
}
