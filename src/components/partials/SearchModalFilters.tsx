import SheetModal, { SheetModalProps } from '~/components/shared/SheetModal';
import { Dispatch, memo, SetStateAction, useCallback, useState } from 'react';
import SelectBox from '~/components/shared/SelectBox';
import {
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { ChevronLeftIcon } from '~/components/icons';
import RadioGroupItemWithLabel from '~/components/shared/RadioBox';
import { RadioGroup } from 'tamagui';
import { getGenresService } from '~/services/getGenres.service';
import Skeleton from '~/components/shared/Skeleton';
import { getDumpArray } from '~/utils/array.util';
import { TruyenTranhLHInstance } from '~/extensions/vi/TruyenTranhLH/instance';
import { Genre } from '~/models/Genre';
import { ISearchParams } from '~/common/interfaces/ISearchParams';

interface SearchModalFiltersProps
  extends Pick<SheetModalProps, 'open' | 'setOpenSheet'> {
  handleApplyFilter: () => void;
  setFilters: Dispatch<SetStateAction<ISearchParams>>;
}
function SearchModalFilters({
  open,
  setOpenSheet,
  setFilters,
  handleApplyFilter,
}: SearchModalFiltersProps) {
  const [dynamicSnapPoints, setDynamicSnapPoints] = useState<number>(65);
  const [filters, _setFilters] = useState<
    Pick<ISearchParams, 'status' | 'genre' | 'sort'>
  >({
    //TODO: select dynamic source when implement feature "select source"
    status: TruyenTranhLHInstance.status[0].value,
    sort: TruyenTranhLHInstance.sort[0].value,
  });

  const { data: genres, status } = getGenresService();

  const setSelectFilter = useCallback((category: string, value: string) => {
    _setFilters((filters) => ({ ...filters, [category]: value }));
  }, []);

  const handleFilter = () => {
    handleApplyFilter();
    setFilters({
      status: filters.status,
      genre: filters.genre,
      sort: filters.sort,
    });
  };

  return (
    <SheetModal
      disableDrag
      snapPoints={[dynamicSnapPoints]}
      open={open}
      setOpenSheet={setOpenSheet}
    >
      <View className='w-full flex-row justify-end mb-4 space-x-4'>
        <TouchableOpacity
          onPress={() =>
            _setFilters({
              //TODO: select dynamic source when implement feature "select source"
              status: TruyenTranhLHInstance.status[0].value,
              sort: TruyenTranhLHInstance.sort[0].value,
              genre: '',
            })
          }
          className='w-fit py-3 px-3 rounded-3xl'
        >
          <Text className='text-white text-base'>Đặt lại</Text>
        </TouchableOpacity>

        <TouchableHighlight
          onPress={handleFilter}
          className='bg-primary/50 w-fit py-3 px-3 rounded-3xl'
        >
          <Text className='text-white text-base'>Lọc ngay</Text>
        </TouchableHighlight>
      </View>

      <View className='flex-row items-center justify-between mb-6 w-[80%]'>
        <Text className='text-white mr-4'>Trạng thái</Text>
        <SelectBox
          selectLabel='Trạng thái'
          selectLabelValue='status'
          placeholder='Tất cả'
          defaultValue={filters.status}
          setSelectFilter={setSelectFilter}
          //TODO: dynamic source select
          items={TruyenTranhLHInstance.status.map((e) => {
            return { name: e.label, value: e.value };
          })}
        />
      </View>

      <View className='flex-row items-center justify-between mb-6 w-[80%]'>
        <Text className='text-white mr-4'>Sắp xếp</Text>
        <SelectBox
          selectLabel='Sắp xếp'
          selectLabelValue='sort'
          placeholder='Sắp xếp'
          defaultValue={filters.sort}
          setSelectFilter={setSelectFilter}
          items={TruyenTranhLHInstance.sort.map((e) => {
            return { name: e.label, value: e.value };
          })}
        />
      </View>

      <View className='flex-row items-center justify-between mb-6 w-[80%]'>
        <Text className='text-white mr-4'>Thể loại</Text>

        <TouchableOpacity
          onPress={() =>
            setDynamicSnapPoints((prevState) => {
              if (prevState === 65) {
                return 85;
              } else {
                return 65;
              }
            })
          }
          className='min-w-[200] flex-row justify-end p-4'
        >
          <Text className='mr-2 text-gray-400'>
            {dynamicSnapPoints === 85 ? 'Thu gọn' : 'Mở rộng'}
          </Text>

          <ChevronLeftIcon
            width={16}
            height={16}
            className={`text-white ${
              dynamicSnapPoints === 65 ? 'rotate-90' : '-rotate-90'
            }`}
          />
        </TouchableOpacity>
      </View>

      <ScrollView className='w-full' showsVerticalScrollIndicator={true}>
        <RadioGroup
          onValueChange={(value) => setSelectFilter('genre', value)}
          value={filters.genre}
          name='form'
        >
          {genres && genres.length > 0 && (
            <RadioGroupGenre
              genres={genres}
              filters={filters}
              setSelectFilter={setSelectFilter}
            />
          )}
        </RadioGroup>

        {status === 'loading' &&
          getDumpArray(6).map((e) => {
            return (
              <View key={e} className='my-2'>
                <Skeleton height={30} width={200}>
                  <View className='bg-white/20 w-full h-full rounded-xl items-center justify-center flex'></View>
                </Skeleton>
              </View>
            );
          })}
      </ScrollView>
    </SheetModal>
  );
}

const RadioGroupGenre = memo(function ({
  filters,
  setSelectFilter,
  genres,
}: {
  filters: Pick<ISearchParams, 'status' | 'genre' | 'sort'>;
  setSelectFilter: (category: string, value: string) => void;
  genres: Genre[];
}) {
  console.log('radio group render');

  return (
    <RadioGroup
      onValueChange={(value) => setSelectFilter('genre', value)}
      value={filters.genre}
      name='form'
    >
      {genres &&
        genres.length > 0 &&
        genres.map((genre) => {
          return (
            <RadioGroupItemWithLabel
              key={genre.url}
              size='$5'
              value={genre?.value || genre?.url}
              label={genre.title}
            />
          );
        })}
    </RadioGroup>
  );
});

export default memo(SearchModalFilters);
