import { ScrollView, TouchableOpacity, View } from 'react-native';
import CustomSafeArea from '~/components/shared/CustomSafeArea';
import { ThreeDotsIcon, ViewModuleIcon } from '~/components/icons';
import SearchHeaderFilter from '~/components/partials/SearchHeaderFilter';
import SearchInput from '~/components/shared/SearchInput';
import { useState } from 'react';
import SearchModalFilters from '~/components/partials/SearchModalFilters';

export default function SearchScreen() {
  const [openSheetFilters, setOpenSheetFilter] = useState(false);

  return (
    <CustomSafeArea>
      <ScrollView className='flex-1 p-2'>
        <View className='w-full items-center justify-between flex-row my-2'>
          <SearchInput />

          <View className='flex-row space-x-2'>
            <TouchableOpacity className='p-1 bg-white/20 rounded-full'>
              <ViewModuleIcon width={28} height={28} className='text-white' />
            </TouchableOpacity>

            <TouchableOpacity className='p-1 bg-white/20 rounded-full'>
              <ThreeDotsIcon width={28} height={28} className='text-white' />
            </TouchableOpacity>
          </View>
        </View>

        <SearchHeaderFilter setOpenSheetFilter={setOpenSheetFilter} />

        <SearchModalFilters
          open={openSheetFilters}
          setOpenSheetFilter={setOpenSheetFilter}
        />
      </ScrollView>
    </CustomSafeArea>
  );
}
