import { Text, TouchableOpacity, View } from 'react-native';
import { BoltIcon, FilterListRoundedIcon, HearIcon } from '~/components/icons';
import { Dispatch, memo, SetStateAction } from 'react';

interface SearchHeaderFilterProps {
  setOpenSheetFilter: Dispatch<SetStateAction<boolean>>;
}

function SearchHeaderFilter({ setOpenSheetFilter }: SearchHeaderFilterProps) {
  return (
    <View className='flex-row space-x-2 w-full my-2'>
      <TouchableOpacity className='flex-row items-center justify-center p-2 bg-primary/30 w-[110] rounded-lg space-x-2'>
        <HearIcon width={18} height={18} className='text-primary' />
        <Text className='text-primary'>Nổi bật</Text>
      </TouchableOpacity>

      <TouchableOpacity className='flex-row items-center justify-center p-2 border border-gray-400 w-[110] rounded-lg space-x-2'>
        <BoltIcon width={18} height={18} className='text-white' />
        <Text className='text-white'>Mới nhất</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setOpenSheetFilter(true)}
        className='flex-row items-center justify-center p-2 border border-gray-400 w-[110] rounded-lg space-x-2'
      >
        <FilterListRoundedIcon width={18} height={18} className='text-white' />
        <Text className='text-white'>Bộ lọc</Text>
      </TouchableOpacity>
    </View>
  );
}
export default memo(SearchHeaderFilter);
