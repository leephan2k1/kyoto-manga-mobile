import { Dimensions, TouchableOpacity, View } from 'react-native';
import CustomSafeArea from '~/components/shared/CustomSafeArea';
import { ThreeDotsIcon } from '~/components/icons';
import SearchHeaderFilter from '~/components/partials/SearchHeaderFilter';
import SearchInput from '~/components/shared/SearchInput';
import { useState } from 'react';
import SearchModalFilters from '~/components/partials/SearchModalFilters';
import LayoutFilters from '~/components/shared/LayoutFilters';
import { CardLayout } from '~/common/types/cardLayouts';
import ComicsList from '~/components/partials/ComicsList';

const { width } = Dimensions.get('window');
export default function SearchScreen() {
  const [openSheetFilters, setOpenSheetFilter] = useState(false);
  const [cardLayout, setCardLayout] = useState<CardLayout>('grid');

  return (
    <CustomSafeArea excludes={{ bottom: true }}>
      <View className='flex-1 p-2'>
        <View className='w-full items-center justify-between flex-row my-2'>
          <SearchInput style={{ width: '60%' }} />

          <View className='flex-row space-x-2'>
            <LayoutFilters
              cardLayout={cardLayout}
              setCardLayout={setCardLayout}
            />

            <TouchableOpacity className='p-1 bg-white/20 rounded-full'>
              <ThreeDotsIcon width={28} height={28} className='text-white' />
            </TouchableOpacity>
          </View>
        </View>

        <SearchHeaderFilter setOpenSheetFilter={setOpenSheetFilter} />

        <SearchModalFilters
          open={openSheetFilters}
          setOpenSheet={setOpenSheetFilter}
        />

        <ComicsList cardLayout={cardLayout} />
      </View>
    </CustomSafeArea>
  );
}
