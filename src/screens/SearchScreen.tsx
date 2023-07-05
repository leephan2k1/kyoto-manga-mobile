import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import CustomSafeArea from '~/components/shared/CustomSafeArea';
import { ThreeDotsIcon, ViewModuleIcon } from '~/components/icons';
import { Search } from 'react-native-feather';
import SearchHeaderFilter from '~/components/partials/SearchHeaderFilter';

export default function SearchScreen() {
  return (
    <CustomSafeArea>
      <ScrollView className='flex-1 p-2'>
        <View className='w-full items-center justify-between flex-row my-2'>
          <View className='flex-row items-center border p-2 border-gray-500 rounded-xl w-[60%] overflow-hidden'>
            <TextInput
              className='placeholder-white w-[90%] h-full'
              placeholder='Tìm kiếm...'
              placeholderTextColor='#fff'
              textContentType='name'
            />

            <Search width={18} height={18} className='text-white' />
          </View>

          <View className='flex-row space-x-2'>
            <TouchableOpacity className='p-1 bg-white/20 rounded-full'>
              <ViewModuleIcon width={28} height={28} className='text-white' />
            </TouchableOpacity>

            <TouchableOpacity className='p-1 bg-white/20 rounded-full'>
              <ThreeDotsIcon width={28} height={28} className='text-white' />
            </TouchableOpacity>
          </View>
        </View>

        <SearchHeaderFilter />
      </ScrollView>
    </CustomSafeArea>
  );
}
