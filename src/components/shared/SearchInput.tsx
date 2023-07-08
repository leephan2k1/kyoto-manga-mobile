import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  TouchableHighlight,
  View,
} from 'react-native';
import { Search, X } from 'react-native-feather';
import { useState } from 'react';

export default function SearchInput() {
  const [searchText, setSearchText] = useState('');

  const handleOnChangeInput = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const value = e.nativeEvent.text;

    setSearchText(value.trim());
  };

  return (
    <View className='h-[45] flex-row items-center border border-gray-500 rounded-xl w-[60%] overflow-hidden pr-1'>
      <TextInput
        className='placeholder-white w-[90%] h-full p-2'
        placeholder='Tìm kiếm...'
        placeholderTextColor='#fff'
        value={searchText}
        onChange={(e) => handleOnChangeInput(e)}
      />

      {searchText.length > 0 ? (
        <TouchableHighlight onPress={() => setSearchText('')}>
          <X
            width={18}
            height={18}
            className='text-white transition-all duration-200'
          />
        </TouchableHighlight>
      ) : (
        <Search
          width={18}
          height={18}
          className='text-white transition-all duration-200'
        />
      )}
    </View>
  );
}
