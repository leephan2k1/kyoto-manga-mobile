import { Text, View } from 'react-native';
import React from 'react';
import { ChevronLeftIcon } from '~/components/icons';

export default function GeneralInfo() {
  return (
    <View className='w-ful flex-col h-fit p-2'>
      <Text className='text-gray-500 my-2'>Thông tin</Text>

      <View className='flex-col w-full bg-[#1f1f1f] rounded-xl h-fit p-2'>
        <View className='flex-row justify-between items-center w-full border-b-2 border-white/10 py-3'>
          <Text className='text-white text-base'>Mã nguồn</Text>

          <ChevronLeftIcon
            className='text-white rotate-180'
            width={16}
            height={16}
          />
        </View>

        <View className='flex-row justify-between border-b-2 border-white/10 items-center w-full py-3'>
          <Text className='text-white text-base'>Liên hệ</Text>

          <ChevronLeftIcon
            className='text-white rotate-180'
            width={16}
            height={16}
          />
        </View>

        <View className='flex-row justify-between items-center border-b-2 border-white/10 w-full py-3'>
          <Text className='text-white text-base'>Donate</Text>

          <ChevronLeftIcon
            className='text-white rotate-180'
            width={16}
            height={16}
          />
        </View>

        <View className='flex-row justify-between items-center w-full  py-3'>
          <Text className='text-white text-base'>Kiểm tra cập nhật</Text>

          <ChevronLeftIcon
            className='text-white rotate-180'
            width={16}
            height={16}
          />
        </View>
      </View>
    </View>
  );
}
