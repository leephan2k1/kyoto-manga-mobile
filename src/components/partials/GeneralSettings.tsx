import { Text, View } from 'react-native';
import SwitchButton from '~/components/shared/SwitchButton';
import { ChevronLeftIcon } from '~/components/icons';

export default function GeneralSettings() {
  return (
    <View className='w-ful flex-col h-fit p-2'>
      <Text className='text-gray-500 my-2'>Cài đặt chung</Text>

      <View className='flex-col w-full bg-[#1f1f1f] rounded-xl h-fit p-2'>
        <View className='flex-row justify-between items-center w-full border-b-2 border-white/10 py-3'>
          <View className='flex-col'>
            <Text className='text-white text-base'>Chế độ ẩn danh</Text>
            <Text className='text-gray-500'>không lưu lịch sử khi đọc</Text>
          </View>

          <SwitchButton
            size='$3'
            key='private-mode'
            onCheckedChange={(val) => console.log('check private mode: ', val)}
          />
        </View>

        <View className='flex-row justify-between items-center w-full border-b-2 border-white/10 py-3'>
          <Text className='text-white text-base'>Nguồn truyện</Text>

          <ChevronLeftIcon
            className='text-white rotate-180'
            width={16}
            height={16}
          />
        </View>

        <View className='flex-row justify-between items-center w-full border-b-2 border-white/10 py-3'>
          <Text className='text-white text-base'>Chế độ đọc</Text>

          <ChevronLeftIcon
            className='text-white rotate-180'
            width={16}
            height={16}
          />
        </View>

        <View className='flex-row justify-between items-center w-full py-3'>
          <Text className='text-white text-base'>Giao diện</Text>

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
