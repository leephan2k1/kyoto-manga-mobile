import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ChevronLeftIcon, CogIcon } from '~/components/icons';

export default function ReadingFooter() {
  return (
    <View className='flex-row items-center justify-center absolute bottom-4 left-0 w-full z-50'>
      <View className='flex-row justify-end space-x-6 items-center w-[95%] py-2 px-4 '>
        <TouchableOpacity className='p-4 rounded-full bg-black w-10 h-10 flex-row items-center justify-center'>
          <ChevronLeftIcon width={20} height={20} className='text-white' />
        </TouchableOpacity>

        <TouchableOpacity className='p-4 rounded-full bg-black w-10 h-10 flex-row items-center justify-center'>
          <ChevronLeftIcon
            width={20}
            height={20}
            className='text-white rotate-180'
          />
        </TouchableOpacity>

        <TouchableOpacity className='p-4 rounded-full bg-black w-10 h-10 flex-row items-center justify-center'>
          <CogIcon width={20} height={20} className='text-white rotate-180' />
        </TouchableOpacity>

        <View className='flex-row items-center p-3 bg-black rounded-xl space-x-2'>
          <ChevronLeftIcon width={20} height={20} className='text-white' />
          <Text className='text-white'>Trang 1 / 20</Text>
          <ChevronLeftIcon
            width={20}
            height={20}
            className='text-white rotate-180'
          />
        </View>
      </View>
    </View>
  );
}
