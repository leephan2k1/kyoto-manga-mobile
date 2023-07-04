import { View } from 'react-native';
import HeroCategory from '~/components/partials/HeroCategory';
import {
  BoltIcon,
  CategoryIcon,
  ListAltAddIcon,
  RandomIcon,
} from '~/components/icons';

export default function HeroCategories() {
  return (
    <View className='flex-row items-center justify-center flex-wrap w-full h-fit px-2 py-4'>
      <HeroCategory title={'Mới cập nhật'}>
        <BoltIcon width={20} height={20} className='text-primary' />
      </HeroCategory>
      <HeroCategory title={'Danh mục'}>
        <CategoryIcon width={20} height={20} className='text-primary' />
      </HeroCategory>
      <HeroCategory title={'Truyện mới'}>
        <ListAltAddIcon width={20} height={20} className='text-primary' />
      </HeroCategory>
      <HeroCategory title={'Đọc ngẫu nhiên'}>
        <RandomIcon width={24} height={24} className='text-primary' />
      </HeroCategory>
    </View>
  );
}
