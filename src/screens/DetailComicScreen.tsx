import { ScrollView, TouchableOpacity } from 'react-native';
import CustomSafeArea from '~/components/shared/CustomSafeArea';
import BackHeader from '~/components/shared/BackHeader';
import { ThreeDotsIcon } from '~/components/icons';
import ComicThumbnail from '~/components/partials/ComicThumbnail';
import ComicInfo from '~/components/partials/ComicInfo';
import GenresContainer from '~/components/partials/GenresContainer';
import ComicActionsContainer from '~/components/partials/ComicActionsContainer';
import ChapterList from '~/components/partials/ChapterList';

export default function DetailComicScreen() {
  return (
    <CustomSafeArea>
      <ScrollView className='flex-1 p-2'>
        <BackHeader
          withoutTitle
          buttonStyles='p-1 bg-white/20 rounded-full'
          iconStyles='text-white'
        >
          <TouchableOpacity className='p-1 bg-white/20 rounded-full'>
            <ThreeDotsIcon width={28} height={28} className='text-white' />
          </TouchableOpacity>
        </BackHeader>

        <ComicThumbnail />

        <ComicInfo />

        <GenresContainer />

        <ComicActionsContainer />

        <ChapterList />
      </ScrollView>
    </CustomSafeArea>
  );
}
