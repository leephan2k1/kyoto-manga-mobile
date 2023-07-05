import { Text, TouchableOpacity, View } from 'react-native';
import { AdjustmentIcon } from '~/components/icons';
import Popover from 'react-native-popover-view';
import { useRef, useState } from 'react';

export default function PopularFilterModal() {
  const touchable = useRef<TouchableOpacity | null>(null);
  const [showPopover, setShowPopover] = useState(false);

  return (
    <>
      <TouchableOpacity
        ref={touchable}
        className='p-2'
        onPress={() => setShowPopover(true)}
      >
        <AdjustmentIcon width={28} height={28} className='text-primary' />
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
        <View className='h-[280] w-[150] bg-[#1f1f1f] flex-col items-center space-y-4'>
          <Text className='text-center text-white text-base'>Sắp xếp theo</Text>

          <TouchableOpacity
            onPress={() => setShowPopover(false)}
            className='w-[125] px-4 py-3 bg-primary/30 rounded-lg'
          >
            <Text className='text-primary text-center'>Tất cả</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setShowPopover(false)}
            className='w-[125] px-4 py-3 bg-white/10 rounded-lg'
          >
            <Text className='text-gray-300 text-center'>Theo tháng</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setShowPopover(false)}
            className='w-[125] px-4 py-3 bg-white/10 rounded-lg'
          >
            <Text className='text-gray-300 text-center'>Theo tuần</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setShowPopover(false)}
            className='w-[125] px-4 py-3 bg-white/10 rounded-lg'
          >
            <Text className='text-gray-300 text-center'>Theo ngày</Text>
          </TouchableOpacity>
        </View>
      </Popover>
    </>
  );
}
