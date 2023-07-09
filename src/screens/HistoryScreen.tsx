import { Text, TouchableOpacity, View } from 'react-native';
import CustomSafeArea from '~/components/shared/CustomSafeArea';
import BackHeader from '~/components/shared/BackHeader';
import LayoutFilters from '~/components/shared/LayoutFilters';
import React, { useState } from 'react';
import { CardLayout } from '~/common/types/cardLayouts';
import ComicsList from '~/components/partials/ComicsList';
import { TrashIcon } from '~/components/icons';
import AlertDialogConfirm from '~/components/shared/AlertDialog';

export default function HistoryScreen() {
  const [cardLayout, setCardLayout] = useState<CardLayout>('grid');

  return (
    <CustomSafeArea>
      <View className='p-2'>
        <BackHeader>
          <View className='flex-row'>
            <LayoutFilters
              cardLayout={cardLayout}
              setCardLayout={setCardLayout}
            />

            <AlertDialogConfirm
              onActionConfirm={() => {
                console.log('confirmed');
              }}
              CustomButton={
                <TouchableOpacity className='p-1 bg-white/20 rounded-full ml-2'>
                  <TrashIcon width={28} height={28} className='text-white' />
                </TouchableOpacity>
              }
              dialogCancelLabel={'Không'}
              dialogConfirmLabel={'Đồng ý'}
              dialogTitle={'Xác nhận'}
              dialogDesc={'Xoá tất cả lịch sử?'}
            />
          </View>
        </BackHeader>

        <ComicsList
          deleteMode
          listHeaderComp={() => (
            <View>
              <Text className='text-3xl text-bold text-white ml-2 my-4'>
                Lịch sử
              </Text>
            </View>
          )}
          cardLayout={cardLayout}
        />
      </View>
    </CustomSafeArea>
  );
}
