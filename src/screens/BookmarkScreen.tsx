import { Text, TouchableOpacity, View } from 'react-native';
import CustomSafeArea from '~/components/shared/CustomSafeArea';
import { FolderIcon, HistoryIcon } from '~/components/icons';
import ComicsList from '~/components/partials/ComicsList';
import { useState } from 'react';
import { CardLayout } from '~/common/types/cardLayouts';
import LayoutFilters from '~/components/shared/LayoutFilters';

export default function BookmarkScreen() {
  const [cardLayout, setCardLayout] = useState<CardLayout>('grid');

  return (
    <CustomSafeArea>
      <View className='p-2'>
        <View className='justify-between items-center flex-row px-2'>
          <Text className='text-3xl text-bold text-white ml-2 my-4'>
            Theo dõi
          </Text>

          <LayoutFilters
            cardLayout={cardLayout}
            setCardLayout={setCardLayout}
          />
        </View>

        <View className='w-full flex-row items-center justify-center mb-2'>
          <TouchableOpacity className='w-[45%] mr-4 p-4 border border-gray-500 rounded-xl flex-row justify-between'>
            <FolderIcon width={18} height={18} className='text-primary mr-4' />
            <Text className='text-white'>Bộ sưu tập</Text>
          </TouchableOpacity>

          <TouchableOpacity className='w-[45%] p-4 border border-gray-500 rounded-xl flex-row justify-between'>
            <HistoryIcon width={18} height={18} className='text-primary mr-4' />
            <Text className='text-white'>Lịch sử</Text>
          </TouchableOpacity>
        </View>

        <ComicsList cardLayout={cardLayout} />
      </View>
    </CustomSafeArea>
  );
}
