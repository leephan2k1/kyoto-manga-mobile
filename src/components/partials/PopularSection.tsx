import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PopularCard from '~/components/shared/PopularCard';
import { useAppNavigation } from '~/hooks/navigationHooks';

const { width } = Dimensions.get('window');

export default function PopularSection() {
  const navigation = useAppNavigation();

  return (
    <View className='flex-col w-full h-fit px-4 py-2 mt-4'>
      <View className='flex-row justify-between items-center'>
        <Text className='text-gray-300 text-lg font-semibold'>Phổ biến</Text>

        <TouchableOpacity onPress={() => navigation.navigate('PopularScreen')}>
          <Text className='text-gray-400'>Xem thêm</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[1, 2, 3]}
        renderItem={({ item, index }) => {
          return (
            <View className={`flex-col mr-8`}>
              <PopularCard style={{ width: (width * 80) / 100 }} isTop />
              <PopularCard style={{ width: (width * 80) / 100 }} isTop />
              <PopularCard
                style={{ width: (width * 80) / 100 }}
                isTop={false}
              />
            </View>
          );
        }}
      />
    </View>
  );
}
