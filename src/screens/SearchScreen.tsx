import { TouchableOpacity, View } from 'react-native';
import CustomSafeArea from '~/components/shared/CustomSafeArea';
import { ThreeDotsIcon } from '~/components/icons';
import SearchHeaderFilter from '~/components/partials/SearchHeaderFilter';
import SearchInput from '~/components/shared/SearchInput';
import { useMemo, useState } from 'react';
import SearchModalFilters from '~/components/partials/SearchModalFilters';
import LayoutFilters from '~/components/shared/LayoutFilters';
import { CardLayout } from '~/common/types/cardLayouts';
import { useSearchComic } from '~/services/searchComic.service';
import ComicsList from '~/components/partials/ComicsList';
import { ComicPreview } from '~/models/Comic';
import Skeleton from '~/components/shared/Skeleton';
import TorriGate from '~/components/icons/TorriGate';
import { getFeaturedSortValue } from '~/helpers/getFeaturedSortValue';
import { getLatestSortValue } from '~/helpers/getLatestSortValue';
import { ISearchParams } from '~/common/interfaces/ISearchParams';

export type SearchSection = 'featured' | 'latest' | 'filter';

export default function SearchScreen() {
  const [openSheetFilters, setOpenSheetFilter] = useState(false);
  const [cardLayout, setCardLayout] = useState<CardLayout>('grid');
  const [searchKeyword, setSearchKeyword] = useState<string | undefined>('');
  const [filters, setFilters] = useState<ISearchParams>({});
  const [searchSection, setSearchSection] = useState<SearchSection>('featured');

  const handleOnSubmit = (value: string) => {
    setSearchKeyword(value);
    setSearchSection('filter');
  };

  const sortValue = useMemo(() => {
    setFilters((f) => ({ ...f, sort: undefined }));
    let sort: string | undefined;

    if (searchSection === 'featured') {
      //TODO: update source dynamically
      sort = getFeaturedSortValue('TruyenTranhLH');
    } else if (searchSection === 'latest') {
      sort = getLatestSortValue('TruyenTranhLH');
    }

    return sort;
  }, [searchSection]);

  const {
    refetch,
    data: comicsListResponse,
    status,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useSearchComic({
    keyword: searchKeyword,
    sort: filters.sort || sortValue,
    status: filters.status,
    genre: filters.genre,
  });

  const handleApplyFilter = () => {
    refetch();
    setOpenSheetFilter(false);
    setSearchSection('filter');
  };

  const comics = useMemo(() => {
    if (!comicsListResponse) return;

    return comicsListResponse?.pages.reduce((acc: ComicPreview[], data) => {
      return acc.concat(data.comics);
    }, []);
  }, [comicsListResponse, status]);

  return (
    <CustomSafeArea excludes={{ bottom: true }}>
      <View className='flex-1 p-2'>
        <View className='w-full items-center justify-between flex-row my-2'>
          <SearchInput
            handleOnSubmit={handleOnSubmit}
            style={{ width: '60%' }}
          />

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

        <SearchHeaderFilter
          searchSection={searchSection}
          setSearchKeyword={setSearchKeyword}
          setSearchSection={setSearchSection}
          setOpenSheetFilter={setOpenSheetFilter}
        />

        <SearchModalFilters
          handleApplyFilter={handleApplyFilter}
          setFilters={setFilters}
          open={openSheetFilters}
          setOpenSheet={setOpenSheetFilter}
        />

        {status === 'loading' && isFetching && (
          <View className='w-full flex-1 flex items-center justify-center'>
            <Skeleton height={50} width={50}>
              <View className='bg-white/20 w-full h-full rounded-xl items-center justify-center flex'>
                <TorriGate width={30} height={30} />
              </View>
            </Skeleton>
          </View>
        )}

        {status === 'success' && comics && comics.length > 0 && (
          <ComicsList
            isFetchingNextPage={isFetchingNextPage}
            actionOnEndReachedProp={() => {
              fetchNextPage();
            }}
            comics={comics}
            cardLayout={cardLayout}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          />
        )}
      </View>
    </CustomSafeArea>
  );
}
