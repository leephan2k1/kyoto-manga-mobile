import { ScrollView, Text } from 'react-native';
import CustomSafeArea from '~/components/shared/CustomSafeArea';
import React from 'react';
import GeneralSettings from '~/components/partials/GeneralSettings';
import GeneralInfo from '~/components/partials/GeneralInfo';

export default function SettingsScreen() {
  return (
    <CustomSafeArea>
      <ScrollView className='p-2'>
        <Text className='text-3xl text-bold text-white ml-2 my-4'>Cài đặt</Text>

        <GeneralSettings />

        <GeneralInfo />
      </ScrollView>
    </CustomSafeArea>
  );
}
