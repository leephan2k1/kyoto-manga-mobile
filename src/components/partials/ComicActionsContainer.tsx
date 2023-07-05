import { Text, TouchableOpacity, View } from 'react-native';
import {
  BoltIcon,
  BookOpenRoundedIcon,
  InfoSquareRoundedIcon,
} from '~/components/icons';

export default function ComicActionsContainer() {
  return (
    <View className='fit w-full my-4'>
      <View className='w-[80%] flex-col mx-auto'>
        <TouchableOpacity className='flex-row items-center justify-center space-x-2 w-full p-4 bg-primary rounded-xl'>
          <BookOpenRoundedIcon width={20} height={20} className='text-black' />
          <Text className='text-black font-bold text-base'>Đọc ngay</Text>
        </TouchableOpacity>

        <View className='flex-row items-center justify-between mt-4'>
          <TouchableOpacity className='flex-row items-center justify-center border border-gray-500 rounded-xl p-4 w-[45%]'>
            <InfoSquareRoundedIcon
              width={20}
              height={20}
              className='text-primary'
            />
            <Text className='text-white ml-4 font-semibold'>Thông tin</Text>
          </TouchableOpacity>

          <TouchableOpacity className='flex-row items-center justify-center border border-gray-500 rounded-xl p-4 w-fit'>
            <BoltIcon width={20} height={20} className='text-primary' />
            <Text className='text-white ml-4 font-semibold'>Chap mới nhất</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
