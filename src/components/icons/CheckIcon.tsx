import Svg, { Path } from 'react-native-svg';

export function CheckIcon(props: any) {
  return (
    <Svg viewBox='0 0 24 24' {...props}>
      <Path
        fill='currentColor'
        d='M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z'
      />
    </Svg>
  );
}