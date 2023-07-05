import { Text, TouchableOpacity, View } from 'react-native';
import { DocumentIcon } from '~/components/icons/DocumentIcon';

export default function ChapterItem({ title }: { title: string }) {
  return (
    <TouchableOpacity className='px-2 py-2 flex-row items-center justify-between my-1 rounded-xl h-[50]'>
      <View className='flex-row space-x-2 items-center'>
        <DocumentIcon width={14} height={14} className='text-white' />

        <View className='flex-col'>
          <Text className='text-white text-sm'>{title}</Text>
          <Text className='text-gray-400 text-sm mt-1'>7/6/2023</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
