import { FlatList, StatusBar, Text, View } from 'react-native';
import CustomSafeArea from '~/components/shared/CustomSafeArea';
import GenresCard from '~/components/shared/GenresCard';
import BackHeader from '~/components/shared/BackHeader';

export default function GenresScreen() {
  return (
    <CustomSafeArea>
      <View className='flex-1 bg-black px-2 py-4'>
        <StatusBar barStyle={'light-content'} />

        <BackHeader />

        <Text className='text-3xl text-bold text-white ml-2 my-4'>
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
