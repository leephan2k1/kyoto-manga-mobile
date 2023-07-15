import {
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import SheetModal, { SheetModalProps } from '~/components/shared/SheetModal';
import React, { useEffect, useState } from 'react';
import { SelectBox } from '~/components/shared/SelectBox';
import { MinusIcon } from '~/components/icons';
import ComicCard from '~/components/shared/ComicCard';

interface AddCollectionModalProps
  extends Pick<SheetModalProps, 'open' | 'setOpenSheet'> {
  editMode?: boolean;
}
export default function AddCollectionModal({
  open,
  editMode,
  setOpenSheet,
}: AddCollectionModalProps) {
  const [searchText, setSearchText] = useState('');

  const handleOnChangeInput = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const value = e.nativeEvent.text;

    setSearchText(value.trim());
  };

  useEffect(() => {
    if (!open) {
      setSearchText('');
    }

    return () => {
      setSearchText('');
    };
  }, [open]);

  return (
    <SheetModal
      disableDrag={Boolean(editMode)}
      snapPoints={editMode ? [80] : [70]}
      open={open}
      setOpenSheet={setOpenSheet}
    >
      <View className='flex-1 justify-between'>
        <View className='flex-col w-full h-[80%]'>
          <Text className='text-white text-lg mt-4'>
            {editMode ? 'Sửa bộ sưu tập' : 'Thêm bộ sưu tập'}{' '}
          </Text>

          <TextInput
            className='placeholder-white w-[90%] mt-4 bg-white/10 h-[50] rounded-xl p-2'
            placeholder='Tên bộ sưu tập...'
            placeholderTextColor='#fff'
            value={searchText}
            onChange={(e) => handleOnChangeInput(e)}
          />

          <View className='flex-row items-center justify-between w-[85%] my-4'>
            <Text className='text-white mr-4'>Sắp xếp theo</Text>
            <SelectBox
              selectLabel='Sắp xếp theo: '
              placeholder='Sắp xếp theo: '
              items={[
                { name: 'Tên', value: 'name' },
                { name: 'Ngày thêm', value: 'add-date' },
              ]}
            />
          </View>

          <View className='flex-row items-center justify-between mb-6 w-[85%]'>
            <Text className='text-white mr-4'>Thứ tự sắp xếp</Text>
            <SelectBox
              selectLabel='Thứ tự sắp xếp: '
              placeholder='Thứ tự sắp xếp: '
              items={[
                { name: 'Giảm dần (mới)', value: 'desc' },
                { name: 'Tăng dần (cũ)', value: 'asc' },
              ]}
            />
          </View>

          {editMode && (
            <ScrollView nestedScrollEnabled={true}>
              <View className='flex-row items-center'>
                <TouchableOpacity
                  onPress={() => {
                    console.log('delete item');
                  }}
                  className='flex-row items-center justify-center p-2 h-6 w-6 bg-rose-500 rounded-full mr-4'
                >
                  <MinusIcon width={16} height={16} className='text-white' />
                </TouchableOpacity>
                <ComicCard cardLayout='list' />
              </View>
              <View className='flex-row items-center'>
                <TouchableOpacity
                  onPress={() => {
                    console.log('delete item');
                  }}
                  className='flex-row items-center justify-center p-2 h-6 w-6 bg-rose-500 rounded-full mr-4'
                >
                  <MinusIcon width={16} height={16} className='text-white' />
                </TouchableOpacity>
                <ComicCard cardLayout='list' />
              </View>
            </ScrollView>
          )}
        </View>

        <View className='w-full items-end justify-center mb-10 '>
          <TouchableOpacity className='p-4 rounded-xl bg-primary/20 w-[80]'>
            <Text className='text-primary text-center'>Lưu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SheetModal>
  );
}
