import { Text, TouchableOpacity, View } from 'react-native';
import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { ViewModuleIcon } from '~/components/icons';
import Popover from 'react-native-popover-view';
import { CardLayout } from '~/common/types/cardLayouts';

const filters: { value: CardLayout; name: string }[] = [
  { value: 'grid', name: 'Lưới thu gọn' },
  { value: 'thumbnail-grid', name: 'Lưới chỉ bìa' },
  { value: 'full-grid', name: 'Lưới' },
  { value: 'list', name: 'Danh sách' },
];

export default function LayoutFilters({
  setCardLayout,
  cardLayout,
}: {
  cardLayout: CardLayout;
  setCardLayout: Dispatch<SetStateAction<CardLayout>>;
}) {
  const touchable = useRef<TouchableOpacity | null>(null);
  const [showPopover, setShowPopover] = useState(false);

  return (
    <>
      <TouchableOpacity
        ref={touchable}
        className='p-1 bg-white/20 rounded-full'
        onPress={() => setShowPopover(true)}
      >
        <ViewModuleIcon width={28} height={28} className='text-white' />
      </TouchableOpacity>

      <Popover
        isVisible={showPopover}
        onRequestClose={() => setShowPopover(false)}
        arrowSize={{ width: 0, height: 0 }}
        popoverStyle={{
          backgroundColor: '#1f1f1f',
          borderRadius: 10,
          overflow: 'hidden',
          paddingTop: 10,
          paddingHorizontal: 10,
        }}
        // @ts-ignore
        from={touchable}
      >
        <View className='h-[280] w-[180] bg-[#1f1f1f] flex-col items-center space-y-4'>
          <Text className='text-center text-white text-base'>Hiển thị</Text>

          {filters.map((e) => {
            const isActive = e.value === cardLayout;

            return (
              <TouchableOpacity
                onPress={() => {
                  setShowPopover(false);
                  setCardLayout(e.value);
                }}
                key={e.value}
                className={`w-[135] px-4 py-3 ${
                  isActive ? 'bg-primary/30' : 'bg-white/10'
                } rounded-lg`}
              >
                <Text
                  className={`${
                    isActive ? 'text-primary' : 'text-gray-300'
                  } text-center`}
                >
                  {e.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </Popover>
    </>
  );
}
