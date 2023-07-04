import { Dimensions, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { BookOpenRoundedIcon } from '~/components/icons';

const { width } = Dimensions.get('window');
export default function PopularCard({ isTop }: { isTop: boolean }) {
  return (
    <View
      style={{ width: (width * 80) / 100 }}
      className={`h-[180] ${
        isTop ? 'border-b-2 border-white/20' : ''
      } mt-4 flex-row pb-4`}
    >
      <Image
        priority='high'
        className='rounded-xl'
        cachePolicy='memory-disk'
        style={{ width: '30%', height: '100%' }}
        source='data:image/jpeg;base64,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'
        contentFit='cover'
        transition={1000}
      />

      <View className='ml-2 flex-1 flex-row items-center'>
        <Text className='text-2xl font-bold text-white'>1</Text>

        <View className='flex-col ml-2'>
          <Text
            ellipsizeMode='middle'
            numberOfLines={1}
            className='text-base text-white font-semibold'
          >
            Chainsaw Man
          </Text>
          <View className='flex-row items-center mt-2'>
            <BookOpenRoundedIcon
              width={16}
              height={16}
              className='text-gray-400'
            />
            <Text className='text-small ml-2 text-gray-400'>Chapter 400</Text>
          </View>
        </View>
      </View>
    </View>
  );
}