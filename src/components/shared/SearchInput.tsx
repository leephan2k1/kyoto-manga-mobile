import {
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputProps,
  TextInputSubmitEditingEventData,
  TouchableHighlight,
  View,
  ViewStyle,
} from 'react-native';
import { Search, X } from 'react-native-feather';
import { memo, useState } from 'react';

function SearchInput({
  style,
  textInputProps,
  handleOnSubmit,
  actionOnClear,
}: {
  handleOnSubmit: (value: string) => void;
  actionOnClear?: () => void;
  textInputProps?: TextInputProps;
  style?: StyleProp<ViewStyle>;
}) {
  const [searchText, setSearchText] = useState('');

  const handleInputSubmit = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    if (e.nativeEvent.text) {
      handleOnSubmit(e.nativeEvent.text.trim());
    }
  };

  return (
    <View
      style={style}
      className='h-[45] flex-row items-center bg-[#1f1f1f] rounded-xl overflow-hidden pr-1'
    >
      <TextInput
        {...textInputProps}
        className='placeholder-white w-[90%] h-full p-2'
        placeholder='Tìm kiếm...'
        placeholderTextColor='#fff'
        value={searchText}
        onChange={(e) => setSearchText(e.nativeEvent.text)}
        onSubmitEditing={(e) => handleInputSubmit(e)}
      />

      {searchText.length > 0 ? (
        <TouchableHighlight
          onPress={() => {
            setSearchText('');
            if (actionOnClear) {
              actionOnClear();
            }
          }}
        >
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

export default memo(SearchInput);
