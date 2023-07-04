import { Text, TouchableOpacity } from 'react-native';
import { ChevronLeftIcon } from '~/components/icons';
import { useAppNavigation } from '~/hooks/navigationHooks';

export default function BackHeader({ customTitle }: { customTitle?: string }) {
  const navigation = useAppNavigation();

  return (
    <TouchableOpacity
      className='flex-row items-center my-2'
      onPress={() => navigation.goBack()}
    >
      <ChevronLeftIcon width={30} height={30} className='text-primary' />
      <Text className='text-primary text-xl'>
        {customTitle ? customTitle : 'Quay về'}
      </Text>
    </TouchableOpacity>
  );
}
