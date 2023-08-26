import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Image } from 'expo-image';
import { useAppNavigation } from '~/hooks/navigationHooks';
import { CardLayout } from '~/common/types/cardLayouts';
import { memo, ReactNode } from 'react';
import { ComicPreview } from '~/models/Comic';
import Skeleton from '~/components/shared/Skeleton';
import TorriGate from '~/components/icons/TorriGate';
import { LinearGradient } from 'expo-linear-gradient';
import { BookOpenRoundedIcon } from '~/components/icons';

interface ComicCardProps {
  cardLayout: CardLayout;
  style?: StyleProp<ViewStyle>;
  CornerButton?: ReactNode;
  comicPreview: ComicPreview;
}
function ComicCard({
  cardLayout,
  style,
  CornerButton,
  comicPreview,
}: ComicCardProps) {
  const navigation = useAppNavigation();

  if (cardLayout === 'list') {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ComicLayout', { screen: 'DetailComic' })
        }
        className='relative flex-row w-full h-[80] my-2'
      >
        {CornerButton}

        <Image
          className='rounded-lg'
          cachePolicy='memory-disk'
          style={{
            height: '100%',
            width: 50,
          }}
          source={comicPreview.thumbnail}
          contentFit='cover'
          transition={1000}
        />

        <Text
          ellipsizeMode='tail'
          numberOfLines={1}
          className='text-base font-semibold text-gray-200 my-2 z-50 px-1 ml-2 flex-1'
        >
          {comicPreview.title}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ComicLayout', { screen: 'DetailComic' })
      }
      style={style}
      className={`relative flex-col ${
        cardLayout === 'full-grid' ? 'h-[340]' : 'h-[300]'
      } ${cardLayout === 'full-grid' ? 'w-[180]' : 'w-[175]'}`}
    >
      {CornerButton}

      <Image
        className='rounded-xl'
        cachePolicy='memory-disk'
        style={{
          width: '100%',
          height: cardLayout === 'full-grid' ? '80%' : '100%',
        }}
        source={comicPreview.thumbnail}
        contentFit='cover'
        transition={1000}
      />

      {cardLayout !== 'thumbnail-grid' && (
        <>
          {cardLayout === 'grid' && (
            <View className='absolute w-full h-[30%] flex flex-col justify-end bottom-0 pb-4'>
              <LinearGradient
                className='absolute -bottom-2 left-0 z-40 w-full h-[180%] rotate-180'
                colors={['rgba(0,0,0,1)', 'transparent']}
              />

              <Text
                ellipsizeMode='tail'
                numberOfLines={2}
                className='text-base font-semibold text-gray-200 my-2 z-50 px-1'
              >
                {comicPreview.title}
              </Text>
              <View className='flex-row items-center px-1 z-50'>
                <BookOpenRoundedIcon
                  width={16}
                  height={16}
                  className='text-white'
                />
                <Text
                  ellipsizeMode='tail'
                  numberOfLines={1}
                  className='ml-2 text-white w-[85%]'
                >
                  {comicPreview.latestChapter}
                </Text>
              </View>
            </View>
          )}

          {cardLayout === 'full-grid' && (
            <>
              <Text
                ellipsizeMode='middle'
                numberOfLines={1}
                className='text-base font-semibold text-gray-200 my-2'
              >
                {comicPreview.title}
              </Text>
              <View className='flex-row items-center'>
                <BookOpenRoundedIcon
                  width={16}
                  height={16}
                  className='text-gray-400'
                />
                <Text
                  ellipsizeMode='tail'
                  numberOfLines={1}
                  className='ml-2 text-gray-400 w-[85%]'
                >
                  {comicPreview.latestChapter}
                </Text>
              </View>
            </>
          )}
        </>
      )}
    </TouchableOpacity>
  );
}

export function ComicCardSkeleton({
  cardLayout,
  style,
}: Pick<ComicCardProps, 'cardLayout' | 'style'>) {
  if (cardLayout === 'list') {
    return (
      <View className='relative flex-row w-full h-[80] my-2'>
        <Skeleton height={50} width={50}>
          <View className='bg-white/20 w-full h-full rounded-xl items-center justify-center flex'>
            <TorriGate width={30} height={30} />
          </View>
        </Skeleton>
      </View>
    );
  }

  return (
    <View
      style={style}
      className={`relative flex-col ${
        cardLayout === 'full-grid' ? 'h-[340]' : 'h-[280]'
      } ${cardLayout === 'full-grid' ? 'w-[180]' : 'w-[165]'} relative`}
    >
      <View
        className={
          'w-full h-full bg-[#1f1f1f] flex items-center justify-center rounded-xl'
        }
      >
        <Skeleton height={50} width={50}>
          <View className='bg-white/10 w-full h-full rounded-xl items-center justify-center flex'>
            <TorriGate width={30} height={30} />
          </View>
        </Skeleton>
      </View>
    </View>
  );
}

export default memo(ComicCard);
