import SheetModal, { SheetModalProps } from '~/components/shared/SheetModal';
import { memo, useState } from 'react';
import { SelectBox } from '~/components/shared/SelectBox';
import {
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { ChevronLeftIcon } from '~/components/icons';
import { CheckboxWithLabel } from '~/components/shared/CheckBox';

interface SearchModalFiltersProps extends SheetModalProps {}
function SearchModalFilters({
  open,
  setOpenSheetFilter,
}: SearchModalFiltersProps) {
  const [dynamicSnapPoints, setDynamicSnapPoints] = useState<number>(65);

  return (
    <SheetModal
      snapPoints={[dynamicSnapPoints]}
      open={open}
      setOpenSheetFilter={setOpenSheetFilter}
    >
      <View className='w-full flex-row justify-end mb-4'>
        <TouchableHighlight className='bg-primary/50 w-fit py-3 px-3 rounded-3xl'>
          <Text className='text-white text-base'>Lọc ngay</Text>
        </TouchableHighlight>
      </View>

      <View className='flex-row items-center justify-between mb-6 w-[80%]'>
        <Text className='text-white mr-4'>Trạng thái</Text>
        <SelectBox
          selectLabel='Trạng thái'
          placeholder='Đang tiến hành'
          items={[
            { name: 'Tất cả', value: 'all' },
            { name: 'Đang tiến hành', value: 'action' },
            { name: 'Hoàn thành', value: 'romance' },
          ]}
        />
      </View>

      <View className='flex-row items-center justify-between mb-6 w-[80%]'>
        <Text className='text-white mr-4'>Thể loại</Text>

        <TouchableOpacity
          onPress={() =>
            setDynamicSnapPoints((prevState) => {
              if (prevState === 65) {
                return 85;
              } else {
                return 65;
              }
            })
          }
          className='min-w-[200] flex-row justify-end p-4'
        >
          <Text className='mr-2 text-gray-400'>
            {dynamicSnapPoints === 85 ? 'Thu gọn' : 'Mở rộng'}
          </Text>

          <ChevronLeftIcon
            width={16}
            height={16}
            className={`text-white ${
              dynamicSnapPoints === 65 ? 'rotate-90' : '-rotate-90'
            }`}
          />
        </TouchableOpacity>
      </View>

      <ScrollView className='w-full' showsVerticalScrollIndicator={true}>
        <CheckboxWithLabel size='$5' label='Hành động' value='action' />
        <CheckboxWithLabel size='$5' label='Ngôn tình' value='romance' />
        <CheckboxWithLabel size='$5' label='Siêu nhiên' value='fantasy' />
        <CheckboxWithLabel size='$5' label='Phiêu lưu' value='ádsada' />
        <CheckboxWithLabel size='$5' label='Isekai' value='isekai' />
        <CheckboxWithLabel size='$5' label='Ẩm thực' value='am-thuc' />
      </ScrollView>
    </SheetModal>
  );
}

export default memo(SearchModalFilters);
