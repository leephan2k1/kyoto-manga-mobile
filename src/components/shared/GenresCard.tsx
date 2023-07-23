import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { Genre } from '~/models/Genre';
import Skeleton from '~/components/shared/Skeleton';
import TorriGate from '~/components/icons/TorriGate';
import { CategoryIcon } from '~/components/icons';

interface GenresCardProps {
  style?: StyleProp<ViewStyle>;
  genre: Genre;
}

export default function GenresCard({ style, genre }: GenresCardProps) {
  return (
    <View
      style={style}
      className='w-[180] h-[100] rounded-xl relative  bg-[#1f1f1f] overflow-hidden'
    >
      <CategoryIcon
        width={70}
        height={70}
        className='text-primary rotate-[30deg] -right-4 -top-2 absolute'
      />

      <Text className='absolute bottom-2 left-2 text-white/70 text-sm font-semibold'>
        {genre.title}
      </Text>
    </View>
  );
}

export function GenreSkeleton({ style }: Pick<GenresCardProps, 'style'>) {
  return (
    <View
      style={style}
      className='w-[180] h-[100] rounded-xl relative  bg-[#1f1f1f] overflow-hidden'
    >
      <View className={'absolute left-[30%] top-2 z-30 p-4 rounded-xl'}>
        <Skeleton height={50} width={50}>
          <TorriGate width={30} height={30} />
        </Skeleton>
      </View>
    </View>
  );
}
// <Image
//   priority='high'
//   className='opacity-50'
//   cachePolicy='memory-disk'
//   style={{ width: '100%', height: '100%' }}
//   source='https://znews-photo.zingcdn.me/w660/Uploaded/xbhunku/2018_10_31/image.jpg'
//   contentFit='cover'
//   transition={1000}
// />
