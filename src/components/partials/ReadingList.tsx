import { Dimensions, FlatList, View } from 'react-native';
import React, { useState } from 'react';
import ReadingHeader from '~/components/partials/ReadingHeader';
import ReadingFooter from '~/components/partials/ReadingFooter';
import ComicImage from '~/components/partials/ComicImage';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 16) / 9);
const imageWidth = dimensions.width;

export default function ReadingList() {
  const [activeActionsUI, setActionsUI] = useState(true);

  return (
    <View className='flex-1 relative'>
      {activeActionsUI && (
        <>
          <ReadingHeader />
          <ReadingFooter />
        </>
      )}

      <FlatList
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
        initialNumToRender={4}
        data={Array.from(new Array(10).keys()).reverse()}
        renderItem={({ item, index }) => {
          return (
            <ComicImage key={index} index={index} setActionsUI={setActionsUI} />
          );
        }}
      />
    </View>
  );
}
