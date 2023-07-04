import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ChevronLeftIcon = (props: any) => (
  <Svg viewBox='0 0 24 24' {...props}>
    <Path
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='m15 6-6 6 6 6'
    />
  </Svg>
);
