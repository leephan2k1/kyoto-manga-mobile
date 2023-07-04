import { ScrollView, View } from 'react-native';
import HeroSwiper from '~/components/partials/HeroSwiper';
import { StatusBar } from 'expo-status-bar';
import HeroCategories from '~/components/partials/HeroCategories';
import ComicSection from '~/components/shared/ComicSection';

export default function HomeScreen() {
  return (
    <View className='flex-1 bg-black'>
      <StatusBar style='light' />

      <ScrollView showsVerticalScrollIndicator={false}>
        <HeroSwiper />

        <HeroCategories />

        <ComicSection />
      </ScrollView>
    </View>
  );
}
