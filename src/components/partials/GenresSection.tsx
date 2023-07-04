import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import GenresCard from '~/components/shared/GenresCard';

export default function GenresSection() {
  return (
    <View className='flex-col w-full h-fit px-4 py-2'>
      <View className='flex-row justify-between items-center mb-4'>
        <Text className='text-gray-300 text-lg font-semibold'>Thể loại</Text>

        <TouchableOpacity>
          <Text className='text-gray-400'>Xem thêm</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[1, 2, 3, 4, 5]}
        renderItem={({ item, index }) => {
          return (
            <View className={`flex-col ${index !== 4 ? 'mr-6' : ''}`}>
              <GenresCard isBottom={false} />
              <GenresCard isBottom />
            </View>
          );
        }}
      />
    </View>
  );
}
