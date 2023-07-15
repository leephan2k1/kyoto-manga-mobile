import { Text, TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon } from '~/components/icons';
import { useAppNavigation } from '~/hooks/navigationHooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ReadingHeader() {
  const insets = useSafeAreaInsets();
  const navigation = useAppNavigation();

  return (
    <View
      style={{
        marginTop: insets.top + 2,
      }}
      className='flex-row items-center justify-center absolute left-0 w-full z-50'
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className='flex-row items-center w-[95%] py-4 pl-2 pr-4 bg-black rounded-xl'
      >
        <ChevronLeftIcon width={16} height={16} className='text-white mr-2' />

        <View className='flex-col'>
          <Text
            ellipsizeMode='tail'
            numberOfLines={1}
            className='text-white text-base'
          >
            Akuyaku Ouji wa Koi ga Dekinai
          </Text>
          <Text
            ellipsizeMode='tail'
            numberOfLines={1}
            className='text-sm text-gray-400'
          >
            Akuyaku Ouji wa Koi ga Dekinai Chap 11.5
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
