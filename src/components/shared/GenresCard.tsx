import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { Image } from 'expo-image';

export default function GenresCard({
  style,
}: {
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View
      style={style}
      className='w-[180] h-[100] rounded-xl relative overflow-hidden'
    >
      <Image
        priority='high'
        className='opacity-50'
        cachePolicy='memory-disk'
        style={{ width: '100%', height: '100%' }}
        source='https://znews-photo.zingcdn.me/w660/Uploaded/xbhunku/2018_10_31/image.jpg'
        contentFit='cover'
        transition={1000}
      />

      <Text className='absolute bottom-2 left-2 text-white text-base font-semibold'>
        Action
      </Text>
    </View>
  );
}
