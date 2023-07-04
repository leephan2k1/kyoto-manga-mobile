import { Text, TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon } from '~/components/icons';
import { useAppNavigation } from '~/hooks/navigationHooks';
import { PropsWithChildren } from 'react';

interface BackHeaderProps extends PropsWithChildren {
  customTitle?: string;
}

export default function BackHeader({ customTitle, children }: BackHeaderProps) {
  const navigation = useAppNavigation();

  return (
    <View className='flex-row items-center justify-between my-2'>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View className='flex-row items-center'>
          <ChevronLeftIcon width={30} height={30} className='text-primary' />
          <Text className='text-primary text-xl'>
            {customTitle ? customTitle : 'Quay về'}
          </Text>
        </View>
      </TouchableOpacity>

      {children}
    </View>
  );
}
