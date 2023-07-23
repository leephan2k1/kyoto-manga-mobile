import { FlatList, StatusBar, Text, View } from 'react-native';
import CustomSafeArea from '~/components/shared/CustomSafeArea';
import BackHeader from '~/components/shared/BackHeader';
import PopularCard, {
  PopularCardSkeleton,
} from '~/components/shared/PopularCard';
import PopularFilterModal from '~/components/partials/PopularFilterModal';
import { getPopulationsService } from '~/services/getPopulations.service';
import { getDumpArray } from '~/utils/array.util';

export default function PopularScreen() {
  const { data: populationsComic, status } = getPopulationsService();

  return (
    <CustomSafeArea excludes={{ bottom: true }}>
      <View className='flex-1 bg-black px-2 pt-4'>
        <StatusBar barStyle={'light-content'} />

        <BackHeader>
          <PopularFilterModal />
        </BackHeader>

        <Text className='text-3xl text-bold text-white ml-2  mb-4'>
          Phổ biến
        </Text>

        {populationsComic && populationsComic.length > 0 && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={populationsComic}
            className='flex-1'
            renderItem={({ item, index }) => {
              return (
                <View className={`flex-col mr-8 w-full`}>
                  <PopularCard
                    comic={item}
                    order={index + 1}
                    isTop={index < populationsComic?.length - 1}
                    style={{ width: '100%' }}
                  />
                </View>
              );
            }}
          />
        )}

        {status === 'loading' && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={getDumpArray(6)}
            className='flex-1'
            renderItem={({ item, index }) => {
              return (
                <View className={`flex-col mr-8 w-full`}>
                  <PopularCardSkeleton
                    isTop={index < 5}
                    style={{ width: '100%' }}
                  />
                </View>
              );
            }}
          />
        )}
      </View>
    </CustomSafeArea>
  );
}
