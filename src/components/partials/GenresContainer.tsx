import { ScrollView } from 'react-native';
import GenreItem from '~/components/shared/GenreItem';

export default function GenresContainer() {
  return (
    <ScrollView
      className='h-fit'
      horizontal
      showsHorizontalScrollIndicator={true}
    >
      <GenreItem />
      <GenreItem />
      <GenreItem />
      <GenreItem />
      <GenreItem />
      <GenreItem />
      <GenreItem />
    </ScrollView>
  );
}
