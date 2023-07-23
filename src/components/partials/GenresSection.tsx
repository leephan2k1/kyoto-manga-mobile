import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import GenresCard, { GenreSkeleton } from '~/components/shared/GenresCard';
import { useAppNavigation } from '~/hooks/navigationHooks';
import { getGenresService } from '~/services/getGenres.service';
import { getDumpArray } from '~/utils/array.util';
import { cluster } from 'radash';

const LIMIT_ITEMS = 8;

export default function GenresSection() {
  const navigation = useAppNavigation();

  const { data: genres, status } = getGenresService();

  return (
    <View className='flex-col w-full h-fit px-4 py-2'>
      <View className='flex-row justify-between items-center mb-4'>
        <Text className='text-gray-300 text-lg font-semibold'>Thể loại</Text>

        <TouchableOpacity onPress={() => navigation.navigate('GenresScreen')}>
          <Text className='text-gray-400'>Xem thêm</Text>
        </TouchableOpacity>
      </View>

      {genres && genres.length > 0 && (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          // limit <LIMIT_ITEMS> elements for home screen
          data={cluster(genres.slice(0, LIMIT_ITEMS), 2)}
          renderItem={({ item, index }) => {
            return (
              <View className={`flex-col ${index !== 4 ? 'mr-4' : ''}`}>
                <GenresCard genre={item[0]} />
                <GenresCard genre={item[1]} style={{ marginTop: 30 }} />
              </View>
            );
          }}
        />
      )}

      {status === 'loading' && (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          // limit <LIMIT_ITEMS> elements for home screen
          data={getDumpArray(LIMIT_ITEMS)}
          renderItem={({ item, index }) => {
            return (
              <View className={`flex-col ${index !== 4 ? 'mr-4' : ''}`}>
                <GenreSkeleton />
                <GenreSkeleton style={{ marginTop: 30 }} />
              </View>
            );
          }}
        />
      )}
    </View>
  );
}
