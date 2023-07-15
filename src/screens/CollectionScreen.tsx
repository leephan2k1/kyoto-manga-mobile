import { View } from 'react-native';
import CustomSafeArea from '~/components/shared/CustomSafeArea';
import BackHeader from '~/components/shared/BackHeader';
import React, { useState } from 'react';
import LayoutFilters from '~/components/shared/LayoutFilters';
import { CardLayout } from '~/common/types/cardLayouts';
import ComicsList from '~/components/partials/ComicsList';
import CollectionScreenHeader from '~/components/partials/CollectionScreenHeader';

export default function CollectionScreen() {
  const [cardLayout, setCardLayout] = useState<CardLayout>('grid');

  return (
    <CustomSafeArea excludes={{ bottom: true }}>
      <View className='flex-1 px-2 py-4'>
        <BackHeader>
          <LayoutFilters
            cardLayout={cardLayout}
            setCardLayout={setCardLayout}
          />
        </BackHeader>

        <ComicsList
          listHeaderComp={() => <CollectionScreenHeader />}
          cardLayout={cardLayout}
        />
      </View>
    </CustomSafeArea>
  );
}
