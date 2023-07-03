import { Button, Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { addTwo, selectValue } from '~/store/slices/couter.slice';

export default function HomeScreen() {
  const counter = useAppSelector(selectValue);
  const dispatch = useAppDispatch();

  return (
    <View className='flex-1 items-center justify-center'>
      <Text>{counter}</Text>
      <Button onPress={() => dispatch(addTwo())} title={'Double Value'} />
    </View>
  );
}
