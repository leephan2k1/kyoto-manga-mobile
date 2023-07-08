import Svg, { G, Path } from 'react-native-svg';

export function HistoryIcon(props: any) {
  return (
    <Svg viewBox='0 0 24 24' {...props}>
      <G
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
      >
        <Path d='M5.636 18.364A9 9 0 1 0 3 12.004V14' />
        <Path d='m1 12 2 2 2-2m6-4v5h5' />
      </G>
    </Svg>
  );
}
