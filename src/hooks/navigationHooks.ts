import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '~/common/interfaces/rootStackParamsList';

export const useAppNavigation = useNavigation<
  NativeStackNavigationProp<RootStackParamsList>
>;
