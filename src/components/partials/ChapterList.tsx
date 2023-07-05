import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import ChapterItem from '~/components/shared/ChapterItem';
import { Search } from 'react-native-feather';

const { width } = Dimensions.get('window');
export default function ChapterList() {
  return (
    <View className='flex-col'>
      <Text className='ml-5 text-white text-base font-semibold mb-2'>
        Danh sách chương
      </Text>

      <View className='flex-row items-center border mt-2 p-2 border-gray-500 rounded-xl w-1/2 ml-5 overflow-hidden'>
        <TextInput
          className='placeholder-white w-[85%] h-full'
          placeholder='Đi đến chương...'
          placeholderTextColor='#fff'
          textContentType='name'
        />

        <Search width={18} height={18} className='text-white' />
      </View>

      <ScrollView
        style={{ width: width - 20 }}
        horizontal={true}
        className='rounded-xl h-[500] mb-8 px-2 py-4 mx-auto'
      >
        <FlatList
          nestedScrollEnabled
          style={{ width: width - 40 }}
          showsVerticalScrollIndicator={false}
          data={Array.from(new Array(50).keys()).reverse()}
          renderItem={({ item, index }) => {
            return <ChapterItem title={`Chapter ${item + 1}`} />;
          }}
        />
      </ScrollView>
    </View>
  );
}
