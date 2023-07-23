import { ScrollView, View } from 'react-native';
import HeroSwiper from '~/components/partials/HeroSwiper';
import { StatusBar } from 'expo-status-bar';
import HeroCategories from '~/components/partials/HeroCategories';
import ComicSection from '~/components/shared/ComicSection';
import GenresSection from '~/components/partials/GenresSection';
import PopularSection from '~/components/partials/PopularSection';
import { getSuggestions } from '~/services/getSuggestions.service';

export default function HomeScreen() {
  const { data: suggestionsData, status: suggestionsStatus } = getSuggestions();

  return (
    <View className='flex-1 bg-black'>
      <StatusBar style='light' />

      <ScrollView showsVerticalScrollIndicator={false}>
        <HeroSwiper />

        <HeroCategories />

        <ComicSection
          title='Gợi ý'
          data={suggestionsData}
          status={suggestionsStatus}
        />

        <GenresSection />

        <PopularSection />

        <ComicSection
          title='Truyện mới'
          data={suggestionsData}
          status={suggestionsStatus}
        />
      </ScrollView>
    </View>
  );
}
