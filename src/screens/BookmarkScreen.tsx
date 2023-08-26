import { Text, TouchableOpacity, View } from 'react-native';
import CustomSafeArea from '~/components/shared/CustomSafeArea';
import { FolderIcon, HistoryIcon } from '~/components/icons';
import ComicsList from '~/components/partials/ComicsList';
import React, { useState } from 'react';
import { CardLayout } from '~/common/types/cardLayouts';
import LayoutFilters from '~/components/shared/LayoutFilters';
import { Search, X } from 'react-native-feather';
import SearchInput from '~/components/shared/SearchInput';
import { useAppNavigation } from '~/hooks/navigationHooks';

export default function BookmarkScreen() {
  const navigation = useAppNavigation();
  const [cardLayout, setCardLayout] = useState<CardLayout>('grid');
  const [showInput, setShowInput] = useState(false);

  const handleOnSubmit = (value: string) => {};

  return (
    <CustomSafeArea excludes={{ bottom: true }}>
      <View className='p-2'>
        <View className='justify-between items-center flex-row px-2'>
          <Text className='text-3xl text-bold text-white ml-2 my-4'>
            Theo dõi
          </Text>

          <View className='flex-row items-center'>
            <TouchableOpacity
              onPress={() => setShowInput((prevState) => !prevState)}
              className='p-2 bg-white/20 rounded-full mr-2'
            >
              {showInput ? (
                <X width={20} height={20} className='text-white' />
              ) : (
                <Search width={20} height={20} className='text-white' />
              )}
            </TouchableOpacity>

            <LayoutFilters
              cardLayout={cardLayout}
              setCardLayout={setCardLayout}
            />
          </View>
        </View>

        {showInput && (
          <View className='w-full mb-3 px-2 items-center justify-center'>
            <SearchInput
              handleOnSubmit={handleOnSubmit}
              textInputProps={{ autoFocus: true }}
            />
          </View>
        )}

        <View className='w-full flex-row items-center justify-center mb-2'>
          <TouchableOpacity
            onPress={() => navigation.navigate('CollectionScreen')}
            className='w-[45%] mr-4 p-4 border border-gray-500 rounded-xl flex-row justify-between'
          >
            <FolderIcon width={18} height={18} className='text-primary mr-4' />
            <Text className='text-white'>Bộ sưu tập</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('HistoryScreen')}
            className='w-[45%] p-4 border border-gray-500 rounded-xl flex-row justify-between'
          >
            <HistoryIcon width={18} height={18} className='text-primary mr-4' />
            <Text className='text-white'>Lịch sử</Text>
          </TouchableOpacity>
        </View>

        <View className='flex items-start justify-center pb-64 px-2'>
          <ComicsList cardLayout={cardLayout} />
        </View>
      </View>
    </CustomSafeArea>
  );
}
