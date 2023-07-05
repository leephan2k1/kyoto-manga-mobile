import Svg, { Path } from 'react-native-svg';

export function ThreeDotsIcon(props: any) {
  return (
    <Svg viewBox='0 0 24 24' {...props}>
      <Path
        fill='currentColor'
        d='M16 12a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2Z'
      />
    </Svg>
  );
}
