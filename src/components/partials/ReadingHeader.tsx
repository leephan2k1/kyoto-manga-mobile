import { Text, View } from 'react-native';
import { ChevronLeftIcon } from '~/components/icons';

export default function ReadingHeader() {
  return (
    <View className='flex-row items-center justify-center absolute top-4 left-0 w-full z-50'>
      <View className='flex-row items-center w-[95%] py-4 pl-2 pr-4 bg-black rounded-xl'>
        <ChevronLeftIcon width={16} height={16} className='text-white mr-1' />

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
      </View>
    </View>
  );
}
