import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import ComicCard, { ComicCardSkeleton } from '~/components/shared/ComicCard';
import { ComicPreview } from '~/models/Comic';
import { getDumpArray } from '~/utils/array.util';

interface ComicSectionProps {
  title: string;
  data?: ComicPreview[];
  status: 'error' | 'loading' | 'idle' | 'success';
}

export default function ComicSection({
  title,
  status,
  data: comics,
}: ComicSectionProps) {
  return (
    <View className='flex-col w-full h-fit px-4 py-2'>
      <View className='flex-row justify-between items-center mb-4'>
        <Text className='text-gray-300 text-lg font-semibold'>{title}</Text>

        <TouchableOpacity>
          <Text className='text-gray-400'>Xem thêm</Text>
        </TouchableOpacity>
      </View>

      {comics && comics.length > 0 && (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={comics}
          renderItem={({ item }) => {
            return (
              <ComicCard
                comicPreview={item}
                cardLayout='full-grid'
                style={{ marginRight: 20 }}
              />
            );
          }}
        />
      )}

      {(status === 'loading' || !comics) && (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={getDumpArray(6)}
          renderItem={({ item }) => {
            return (
              <ComicCardSkeleton
                cardLayout='full-grid'
                style={{ marginRight: 20 }}
              />
            );
          }}
        />
      )}
    </View>
  );
}
