import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Edit2, Plus } from 'react-native-feather';
import CollectionCard from '~/components/partials/CollectionCard';
import React, { useEffect, useState } from 'react';
import LazyComponent from '@r0b0t3d/react-native-lazy-component';

export default function CollectionScreenHeader() {
  const [showAddCollectionModal, setShowAddCollectionModal] = useState(false);
  const [isEditMode, setEditMode] = useState(false);

  useEffect(() => {
    if (!showAddCollectionModal) setEditMode(false);
  }, [showAddCollectionModal]);

  return (
    <View>
      <LazyComponent
        /*@ts-ignore */
        load={() => import('~/components/partials/AddCollectionModal')}
        open={showAddCollectionModal}
        editMode={isEditMode}
        setOpenSheet={setShowAddCollectionModal}
      />

      <Text className='text-3xl text-bold text-white ml-2 my-4'>
        Bộ sưu tập
      </Text>

      <View className='w-full flex-row items-center justify-center mb-2'>
        <TouchableOpacity
          onPress={() => setShowAddCollectionModal(true)}
          className='w-[46%] mr-4 p-4 border border-gray-500 rounded-xl flex-row justify-between'
        >
          <Plus width={18} height={18} className='text-primary mr-4' />
          <Text className='text-white'>Thêm mới</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setShowAddCollectionModal(true);
            setEditMode(true);
            console.log('log edit');
          }}
          className='w-[46%] p-4 border border-gray-500 rounded-xl flex-row justify-between'
        >
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
  );
}
