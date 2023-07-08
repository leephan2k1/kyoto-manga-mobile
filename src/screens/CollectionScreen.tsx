import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import CustomSafeArea from '~/components/shared/CustomSafeArea';
import BackHeader from '~/components/shared/BackHeader';
import React, { useState } from 'react';
import { Edit2, Plus } from 'react-native-feather';
import CollectionCard from '~/components/partials/CollectionCard';
import LayoutFilters from '~/components/shared/LayoutFilters';
import { CardLayout } from '~/common/types/cardLayouts';
import ComicsList from '~/components/partials/ComicsList';

export default function CollectionScreen() {
  const [cardLayout, setCardLayout] = useState<CardLayout>('grid');

  return (
    <CustomSafeArea exclude='bottom'>
      <View className='flex-1 px-2 py-4'>
        <BackHeader>
          <LayoutFilters
            cardLayout={cardLayout}
            setCardLayout={setCardLayout}
          />
        </BackHeader>

        <ComicsList
          listHeaderComp={() => (
            <View>
              <Text className='text-3xl text-bold text-white ml-2 my-4'>
                Bộ sưu tập
              </Text>

              <View className='w-full flex-row items-center justify-center mb-2'>
                <TouchableOpacity className='w-[46%] mr-4 p-4 border border-gray-500 rounded-xl flex-row justify-between'>
                  <Plus width={18} height={18} className='text-primary mr-4' />
                  <Text className='text-white'>Thêm mới</Text>
                </TouchableOpacity>

                <TouchableOpacity className='w-[46%] p-4 border border-gray-500 rounded-xl flex-row justify-between'>
                  <Edit2 width={18} height={18} className='text-primary mr-4' />
                  <Text className='text-white'>Chỉnh sửa</Text>
                </TouchableOpacity>
              </View>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator
                className='max-h-[220] min-h-[220]'
                centerContent
              >
                <CollectionCard isActive />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
              </ScrollView>
            </View>
          )}
          cardLayout={cardLayout}
        />
      </View>
    </CustomSafeArea>
  );
}
