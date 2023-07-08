import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { CirclePencil } from '~/components/icons';

export default function ComicInfo() {
  return (
    <View className='flex-col w-full px-2 my-4 space-y-4'>
      <Text className='text-white font-semibold text-2xl'>
        Kimetsu no Yaiba
      </Text>

      <View className='flex-row space-x-2 items-center'>
        <CirclePencil width={18} height={18} className='text-primary' />
        <Text className='text-gray-400'>Gotouge Koyoharu</Text>
      </View>

      <View className='flex-row items-center space-x-2'>
        <View className='w-[18] h-[18] flex items-center justify-center'>
          <Animatable.View
            className='p-1 bg-green-600 w-1 h-1 rounded-full'
            animation='pulse'
            easing='ease-out'
            iterationCount='infinite'
          ></Animatable.View>
        </View>

        <Text className='text-gray-400'>Đang tiến hành</Text>
      </View>
    </View>
  );
}
