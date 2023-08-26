import { Text, TouchableOpacity, View } from 'react-native';
import { BoltIcon, FilterListRoundedIcon, HearIcon } from '~/components/icons';
import { Dispatch, memo, SetStateAction } from 'react';
import { SearchSection } from '~/screens/SearchScreen';

interface SearchHeaderFilterProps {
  setOpenSheetFilter: Dispatch<SetStateAction<boolean>>;
  setSearchSection: Dispatch<SetStateAction<SearchSection>>;
  setSearchKeyword: Dispatch<SetStateAction<string | undefined>>;
  searchSection: SearchSection;
}

function SearchHeaderFilter({
  setOpenSheetFilter,
  setSearchSection,
  searchSection,
  setSearchKeyword,
}: SearchHeaderFilterProps) {
  const handleClickSection = (searchSection: SearchSection) => {
    setSearchSection(searchSection);
    setSearchKeyword(undefined);
  };

  return (
    <View className='flex-row space-x-2 w-full my-2'>
      <TouchableOpacity
        onPress={() => handleClickSection('featured')}
        className={`${
          searchSection === 'featured'
            ? 'bg-primary/30'
            : 'border border-gray-400 text-white'
        } flex-row items-center justify-center p-2 w-[110] rounded-lg space-x-2`}
      >
        <HearIcon
          width={18}
          height={18}
          className={
            searchSection === 'featured' ? 'text-primary' : 'text-white'
          }
        />
        <Text
          className={
            searchSection === 'featured' ? 'text-primary' : 'text-white'
          }
        >
          Nổi bật
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleClickSection('latest')}
        className={`${
          searchSection === 'latest'
            ? 'bg-primary/30 text-primary'
            : 'border border-gray-400 text-white'
        } flex-row items-center justify-center p-2 w-[110] rounded-lg space-x-2`}
      >
        <BoltIcon
          width={18}
          height={18}
          className={searchSection === 'latest' ? 'text-primary' : 'text-white'}
        />
        <Text
          className={searchSection === 'latest' ? 'text-primary' : 'text-white'}
        >
          Mới nhất
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setOpenSheetFilter(true)}
        className={`${
          searchSection === 'filter'
            ? 'bg-primary/30 text-primary'
            : 'border border-gray-400 text-white'
        } flex-row items-center justify-center p-2 w-[110] rounded-lg space-x-2`}
      >
        <FilterListRoundedIcon
          width={18}
          height={18}
          className={searchSection === 'filter' ? 'text-primary' : 'text-white'}
        />
        <Text
          className={searchSection === 'filter' ? 'text-primary' : 'text-white'}
        >
          Bộ lọc
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default memo(SearchHeaderFilter);
