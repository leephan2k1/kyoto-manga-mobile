import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomSafeArea from '~/components/shared/CustomSafeArea';
import BackHeader from '~/components/shared/BackHeader';
import PopularCard from '~/components/shared/PopularCard';
import { AdjustmentIcon } from '~/components/icons';

export default function PopularScreen() {
  return (
    <CustomSafeArea>
      <View className='flex-1 bg-black px-2 py-4'>
        <StatusBar barStyle={'light-content'} />

        <BackHeader>
          <TouchableOpacity>
            <AdjustmentIcon width={28} height={28} className='text-primary' />
          </TouchableOpacity>
        </BackHeader>

        <Text className='text-3xl text-bold text-white ml-2 my-4'>
          Phổ biến
        </Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={({ item, index }) => {
            return (
              <View className={`flex-col mr-8`}>
                <PopularCard isTop />
              </View>
            );
          }}
        />
      </View>
    </CustomSafeArea>
  );
}
