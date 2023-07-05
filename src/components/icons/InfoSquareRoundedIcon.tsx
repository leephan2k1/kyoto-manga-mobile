import Svg, { G, Path } from 'react-native-svg';

export function InfoSquareRoundedIcon(props: any) {
  return (
    <Svg viewBox='0 0 24 24' {...props}>
      <G
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
      >
        <Path d='M12 9h.01M11 12h1v4h1' />
        <Path d='M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9z' />
      </G>
    </Svg>
  );
}
