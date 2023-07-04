import Svg, { Path } from 'react-native-svg';

export const RandomIcon = (props: any) => (
  <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
    <Path
      fill='currentColor'
      fillRule='evenodd'
      d='M4 17a1 1 0 0 1 0-2h2l3-3-3-3H4a1.001 1.001 0 0 1 0-2h3l4 4 4-4h2V5l4 3.001L17 11V9h-1l-3 3 3 3h1v-2l4 3-4 3v-2h-2l-4-4-4 4H4Z'
    />
  </Svg>
);
