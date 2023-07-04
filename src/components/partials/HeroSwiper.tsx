import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { BookOpenIcon } from '~/components/icons';
import HeroCard from '~/components/partials/HeroCard';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  child: { width, justifyContent: 'center', height: 450 },
  text: { fontSize: width * 0.5, textAlign: 'center' },
});

export default function HeroSwiper() {
  return (
    <View className='relative' style={{ height: (height * 70) / 100 }}>
      <SwiperFlatList
        autoplay
        autoplayDelay={10}
        autoplayLoop
        index={2}
        showPagination
        paginationActiveColor='#ffff'
        paginationDefaultColor='#6b7280'
        paginationStyle={{ alignItems: 'center', justifyContent: 'center' }}
        paginationStyleItem={{ marginHorizontal: 4 }}
        paginationStyleItemInactive={{ width: 6, height: 6 }}
        paginationStyleItemActive={{ width: 8, height: 8 }}
        data={['tomato', 'thistle', 'skyblue', 'teal']}
        renderItem={({ item }) => <HeroCard />}
      />

      <TouchableOpacity
        style={{
          transform: [{ translateX: -(width / 4) }],
        }}
        className='space-x-4 flex-row absolute bottom-14 p-3 left-1/2 w-[200] bg-primary rounded-2xl items-center justify-center'
      >
        <BookOpenIcon className='text-black' width={24} height={24} />
        <Text className='text-xl font-semibold'>Đọc ngay</Text>
      </TouchableOpacity>
    </View>
  );
}
