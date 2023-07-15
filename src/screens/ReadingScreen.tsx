import CustomSafeArea from '~/components/shared/CustomSafeArea';
import ReadingList from '~/components/partials/ReadingList';

export default function ReadingScreen() {
  return (
    <CustomSafeArea excludes={{ top: true, bottom: true }}>
      <ReadingList />
    </CustomSafeArea>
  );
}
