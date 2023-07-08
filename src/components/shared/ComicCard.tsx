import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Image } from 'expo-image';
import { BookOpenRoundedIcon } from '~/components/icons';
import { useAppNavigation } from '~/hooks/navigationHooks';
import { LinearGradient } from 'expo-linear-gradient';
import { CardLayout } from '~/common/types/cardLayouts';

interface ComicCardProps {
  cardLayout: CardLayout;
  style?: StyleProp<ViewStyle>;
}
export default function ComicCard({ cardLayout, style }: ComicCardProps) {
  const navigation = useAppNavigation();

  if (cardLayout === 'list') {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ComicLayout', { screen: 'DetailComic' })
        }
        className='flex-row w-full h-[80] my-2'
      >
        <Image
          className='rounded-lg'
          cachePolicy='memory-disk'
          style={{
            height: '100%',
            width: 50,
          }}
          source='https://i.redd.it/5puku5ccuag51.jpg'
          contentFit='cover'
          transition={1000}
        />

        <Text
          ellipsizeMode='tail'
          numberOfLines={1}
          className='text-base font-semibold text-gray-200 my-2 z-50 px-1 ml-2 flex-1'
        >
          Demon Slayer Demon Slayer Demon Slayer Demon Slayer Demon Slayer Demon
          Slayer Demon Slayer Demon Slayer Demon Slayer Demon Slayer Demon
          Slayer Demon Slayer Demon Slayer Demon Slayer Demon Slayer Demon
          Slayer Demon Slayer Demon Slayer Demon Slayer Demon Slayer Demon
          Slayer Demon Slayer
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
      className={` flex-col ${
        cardLayout === 'full-grid' ? 'h-[350]' : 'h-[280]'
      } ${cardLayout === 'full-grid' ? 'w-[180]' : 'w-[165]'} relative`}
    >
      <Image
        className='rounded-xl'
        cachePolicy='memory-disk'
        style={{
          width: '100%',
          height: cardLayout === 'full-grid' ? '80%' : '100%',
        }}
        source='https://i.redd.it/5puku5ccuag51.jpg'
        contentFit='cover'
        transition={1000}
      />

      {cardLayout !== 'thumbnail-grid' && (
        <>
          {cardLayout === 'grid' && (
            <View className='absolute w-full h-fit bottom-0 pb-4'>
              <LinearGradient
                className='absolute bottom-0 left-0 z-40 w-full h-[100%] rotate-180'
                colors={['rgba(0,0,0,1)', 'transparent']}
              />
              <Text
                ellipsizeMode='tail'
                numberOfLines={2}
                className='text-base font-semibold text-gray-200 my-2 z-50 px-1'
              >
                Demon Slayer Demon Slayer Demon Slayer Demon Slayer Demon Slayer
                Demon Slayer Demon Slayer Demon Slayer Demon Slayer Demon Slayer
                Demon Slayer Demon Slayer Demon Slayer Demon Slayer Demon Slayer
                Demon Slayer Demon Slayer Demon Slayer Demon Slayer Demon Slayer
                Demon Slayer Demon Slayer
              </Text>
              <View className='flex-row items-center px-1 z-50'>
                <BookOpenRoundedIcon
                  width={16}
                  height={16}
                  className='text-white'
                />
                <Text className='ml-2 text-white'>Chapter 400</Text>
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
                Demon Slayer Demon Slayer Demon Slayer Demon Slayer Demon Slayer
                Demon Slayer Demon Slayer Demon Slayer Demon Slayer Demon Slayer
                Demon Slayer Demon Slayer Demon Slayer Demon Slayer Demon Slayer
                Demon Slayer Demon Slayer Demon Slayer Demon Slayer Demon Slayer
                Demon Slayer Demon Slayer
              </Text>
              <View className='flex-row items-center'>
                <BookOpenRoundedIcon
                  width={16}
                  height={16}
                  className='text-gray-400'
                />
                <Text className='ml-2 text-gray-400'>Chapter 400</Text>
              </View>
            </>
          )}
        </>
      )}
    </TouchableOpacity>
  );
}
