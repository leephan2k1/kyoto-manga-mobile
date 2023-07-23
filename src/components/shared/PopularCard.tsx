import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { Image } from 'expo-image';
import { BookOpenRoundedIcon } from '~/components/icons';
import { ComicPreview } from '~/models/Comic';
import Skeleton from '~/components/shared/Skeleton';
import TorriGate from '~/components/icons/TorriGate';

interface PopularCardProps {
  isTop: boolean;
  style: StyleProp<ViewStyle>;
  comic: ComicPreview;
  order: number;
}
export default function PopularCard({
  isTop,
  style,
  comic,
  order,
}: PopularCardProps) {
  return (
    <View
      style={style}
      className={`h-[180] ${
        isTop ? 'border-b-2 border-white/20' : ''
      } mt-4 flex-row pb-4`}
    >
      <Image
        priority='high'
        className='rounded-xl'
        cachePolicy='memory-disk'
        style={{ width: '30%', height: '100%' }}
        source={comic.thumbnail}
        contentFit='cover'
        transition={1000}
      />

      <View className='ml-2 flex-1 flex-row items-center'>
        <Text className='text-2xl font-bold text-white'>{order}</Text>

        <View className='flex-col ml-2'>
          <Text
            ellipsizeMode='middle'
            numberOfLines={1}
            className='text-base text-white font-semibold'
          >
            {comic.title}
          </Text>
          <View className='flex-row items-center mt-2'>
            <BookOpenRoundedIcon
              width={16}
              height={16}
              className='text-gray-400'
            />
            <Text className='text-small ml-2 text-gray-400'>
              {comic.latestChapter}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export function PopularCardSkeleton({
  isTop,
  style,
}: Pick<PopularCardProps, 'style' | 'isTop'>) {
  return (
    <View
      style={style}
      className={`h-[180] ${
        isTop ? 'border-b-2 border-white/20' : ''
      } mt-4 flex-row pb-4`}
    >
      <View className='w-[30%] h-full bg-[#1f1f1f] rounded-xl flex items-center justify-center'>
        <Skeleton height={50} width={50}>
          <View className='bg-white/20 w-full h-full rounded-xl items-center justify-center flex'>
            <TorriGate width={30} height={30} />
          </View>
        </Skeleton>
      </View>

      <View className='ml-2 flex-1 flex-row items-center'>
        <View className='text-2xl font-bold text-white'>
          <Skeleton height={30} width={30}>
            <View className='bg-white/20 w-full h-full rounded-xl items-center justify-center flex'></View>
          </Skeleton>
        </View>

        <View className='flex-col ml-2'>
          <View className='text-base text-white font-semibold'>
            <Skeleton height={30} width={200}>
              <View className='bg-white/20 w-full h-full rounded-xl items-center justify-center flex'></View>
            </Skeleton>
          </View>
          <View className='flex-row items-center mt-2'>
            <View className='text-small text-gray-400'>
              <Skeleton height={20} width={150}>
                <View className='bg-white/20 w-full h-full rounded-xl items-center justify-center flex'></View>
              </Skeleton>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
