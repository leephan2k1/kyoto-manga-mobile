import { Dimensions, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width,
    justifyContent: 'center',
    height: 450,
    alignItems: 'center',
  },
});

export default function HeroCard() {
  return (
    <View className='relative' style={styles.container}>
      <LinearGradient
        className='absolute bottom-0 left-0 z-50 w-full h-[40%] rotate-180'
        colors={['rgba(0,0,0,1)', 'transparent']}
      />
      <Image
        className='bg-gradient-to-t from-gray-900 to-slate-50 z-40'
        cachePolicy='memory-disk'
        style={{ width: width, flex: 1 }}
        source='https://product.hstatic.net/200000343865/product/68_6065adc1d8aa412584c47cc1ead08f65_master.jpg'
        contentFit='cover'
        transition={1000}
      />
    </View>
  );
}
