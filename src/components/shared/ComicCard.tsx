import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import { BookOpenRoundedIcon } from '~/components/icons';

export default function ComicCard() {
  return (
    <View className='flex-col h-[350] w-[200] mr-6'>
      <Image
        className='rounded-xl'
        cachePolicy='memory-disk'
        style={{ width: '100%', height: '80%' }}
        source='https://i.redd.it/5puku5ccuag51.jpg'
        contentFit='cover'
        transition={1000}
      />

      <Text
        ellipsizeMode='middle'
        numberOfLines={1}
        className='text-base font-semibold text-gray-200 my-2'
      >
        Demon Slayer Demon Slayer Demon Slayer Demon Slayer Demon Slayer Demon
        Slayer Demon Slayer Demon Slayer Demon Slayer Demon Slayer Demon Slayer
        Demon Slayer Demon Slayer Demon Slayer Demon Slayer Demon Slayer Demon
        Slayer Demon Slayer Demon Slayer Demon Slayer Demon Slayer Demon Slayer
      </Text>
      <View className='flex-row items-center'>
        <BookOpenRoundedIcon width={16} height={16} className='text-gray-400' />
        <Text className='ml-2 text-gray-400'>Chapter 400</Text>
      </View>
    </View>
  );
}
