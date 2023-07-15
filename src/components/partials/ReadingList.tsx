import { Dimensions, FlatList, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import ReadingHeader from '~/components/partials/ReadingHeader';
import ReadingFooter from '~/components/partials/ReadingFooter';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 16) / 9);
const imageWidth = dimensions.width;

export default function ReadingList() {
  return (
    <View className='flex-1 relative'>
      <ReadingHeader />
      <ReadingFooter />
      <FlatList
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
        data={Array.from(new Array(10).keys()).reverse()}
        renderItem={({ item, index }) => {
          return (
            <Image
              cachePolicy='disk'
              contentFit='cover'
              style={{
                width: imageWidth,
                height: imageHeight,
              }}
              source={'https://i8.bumcheo.info/783/783160/06.jpg?v=1681034160'}
            />
          );
        }}
      />
    </View>
  );
}
