import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomSafeArea from '~/components/shared/CustomSafeArea';
import { ChevronLeftIcon } from '~/components/icons';
import { useAppNavigation } from '~/hooks/navigationHooks';
import GenresCard from '~/components/shared/GenresCard';

export default function GenresScreen() {
  const navigation = useAppNavigation();

  return (
    <CustomSafeArea>
      <View className='flex-1 bg-black px-2 py-4'>
        <StatusBar barStyle={'light-content'} />

        <TouchableOpacity
          className='flex-row items-center my-2'
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon width={30} height={30} className='text-primary' />
          <Text className='text-primary text-xl'>Quay về</Text>
        </TouchableOpacity>

        <Text className='text-2xl text-bold text-white ml-2 my-4'>
          Thể loại
        </Text>

        <FlatList
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={({ item, index }) => {
            return (
              <View className={`flex-row justify-center items-center mt-6`}>
                <GenresCard style={{ marginRight: 20 }} />
                <GenresCard />
              </View>
            );
          }}
        />
      </View>
    </CustomSafeArea>
  );
}
