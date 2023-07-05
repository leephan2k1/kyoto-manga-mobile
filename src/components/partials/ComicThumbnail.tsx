import { Dimensions, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';

const { height } = Dimensions.get('window');

export default function ComicThumbnail() {
  return (
    <View
      style={{ height: (height * 48) / 100 }}
      className='w-full flex-col items-center justify-center'
    >
      <Image
        className='rounded-xl h-[350] w-[220]'
        cachePolicy='memory-disk'
        source='https://i.redd.it/5puku5ccuag51.jpg'
        contentFit='cover'
        transition={1000}
      />
    </View>
  );
}
