import Svg, { Path } from 'react-native-svg';

export function AdjustmentIcon(props: any) {
  return (
    <Svg viewBox='0 0 24 24' {...props}>
      <Path
        fill='currentColor'
        fillRule='evenodd'
        d='M20 7a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20zm0 6a1 1 0 1 0 0-2h-1.17a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h9.17a3.001 3.001 0 0 0 5.66 0H20zm0 6a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20z'
        clipRule='evenodd'
      />
    </Svg>
  );
}
