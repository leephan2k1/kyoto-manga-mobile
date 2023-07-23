import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PopularCard, {
  PopularCardSkeleton,
} from '~/components/shared/PopularCard';
import { useAppNavigation } from '~/hooks/navigationHooks';
import { getPopulationsService } from '~/services/getPopulations.service';
import { cluster } from 'radash';
import { getDumpArray } from '~/utils/array.util';

const { width } = Dimensions.get('window');

export default function PopularSection() {
  const navigation = useAppNavigation();

  const { data: populationsComic, status } = getPopulationsService();

  return (
    <View className='flex-col w-full h-fit px-4 py-2 mt-4'>
      <View className='flex-row justify-between items-center'>
        <Text className='text-gray-300 text-lg font-semibold'>Phổ biến</Text>

        <TouchableOpacity onPress={() => navigation.navigate('PopularScreen')}>
          <Text className='text-gray-400'>Xem thêm</Text>
        </TouchableOpacity>
      </View>

      {populationsComic && populationsComic.length > 0 && (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={cluster(populationsComic.slice(0, 9), 3)}
          renderItem={({ item, index }) => {
            let order = index * 3;
            if (item.length < 3) return null;

            return (
              <View className={`flex-col mr-8`}>
                <PopularCard
                  order={order + 1}
                  comic={item[0]}
                  style={{ width: (width * 80) / 100 }}
                  isTop
                />
                <PopularCard
                  order={order + 2}
                  comic={item[1]}
                  style={{ width: (width * 80) / 100 }}
                  isTop
                />
                <PopularCard
                  order={order + 3}
                  comic={item[2]}
                  style={{ width: (width * 80) / 100 }}
                  isTop={false}
                />
              </View>
            );
          }}
        />
      )}

      {status === 'loading' && (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={getDumpArray(3)}
          renderItem={({ item, index }) => {
            return (
              <View className={`flex-col mr-8`}>
                <PopularCardSkeleton
                  style={{ width: (width * 80) / 100 }}
                  isTop
                />
                <PopularCardSkeleton
                  style={{ width: (width * 80) / 100 }}
                  isTop
                />
                <PopularCardSkeleton
                  style={{ width: (width * 80) / 100 }}
                  isTop={false}
                />
              </View>
            );
          }}
        />
      )}
    </View>
  );
}
