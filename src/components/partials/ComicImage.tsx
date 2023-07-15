import { Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'expo-image';
import React, { Dispatch, memo, SetStateAction } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 16) / 9);
const imageWidth = dimensions.width;

interface ComicImageProps {
  setActionsUI: Dispatch<SetStateAction<boolean>>;
  index: number;
}

function ComicImage({ setActionsUI, index }: ComicImageProps) {
  const insets = useSafeAreaInsets();

  return (
    <TouchableWithoutFeedback
      onPress={() => setActionsUI((prvState) => !prvState)}
      key={index}
    >
      <Image
        cachePolicy='disk'
        contentFit='cover'
        style={{
          marginTop: index === 0 ? insets.top : 0,
          width: imageWidth,
          height: imageHeight,
        }}
        source={'https://i8.bumcheo.info/783/783160/06.jpg?v=1681034160'}
      />
    </TouchableWithoutFeedback>
  );
}

export default memo(ComicImage);
