import { Text, View } from 'react-native';
import { PropsWithChildren } from 'react';

interface HeroCategoryProps extends PropsWithChildren {
  title: string;
}
export default function HeroCategory({ children, title }: HeroCategoryProps) {
  return (
    <View className='flex-row items-center justify-between border border-white/30 rounded-xl w-[45%] mx-2 mt-6 py-4 px-6'>
      {children}
      <Text className='text-white'>{title}</Text>
    </View>
  );
}
