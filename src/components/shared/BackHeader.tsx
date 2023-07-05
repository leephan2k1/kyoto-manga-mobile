import { Text, TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon } from '~/components/icons';
import { useAppNavigation } from '~/hooks/navigationHooks';
import { PropsWithChildren } from 'react';

interface BackHeaderProps extends PropsWithChildren {
  customTitle?: string;
  withoutTitle?: boolean;
  iconStyles?: string;
  buttonStyles?: string;
}

export default function BackHeader({
  customTitle,
  children,
  withoutTitle,
  iconStyles,
  buttonStyles,
}: BackHeaderProps) {
  const navigation = useAppNavigation();

  return (
    <View className='flex-row items-center justify-between my-2'>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className='flex-row items-center'
      >
        <TouchableOpacity
          className={`${buttonStyles ? buttonStyles : ''}`}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon
            width={28}
            height={28}
            className={`${iconStyles ? iconStyles : 'text-primary'}`}
          />
        </TouchableOpacity>
        {!withoutTitle && (
          <Text className='text-primary text-xl'>
            {customTitle ? customTitle : 'Quay về'}
          </Text>
        )}
      </TouchableOpacity>

      {children}
    </View>
  );
}
