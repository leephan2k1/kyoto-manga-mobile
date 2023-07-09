import Svg, { Path } from 'react-native-svg';

export function MinusIcon(props: any) {
  return (
    <Svg viewBox='0 0 256 256' {...props}>
      <Path
        fill='currentColor'
        d='M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12Z'
      />
    </Svg>
  );
}
