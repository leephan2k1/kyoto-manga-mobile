import Svg, { Path } from 'react-native-svg';

export const BookmarkIcon = (props: any) => (
  <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
    <Path
      fill='currentColor'
      d='m12 18-4.2 1.8q-1 .425-1.9-.163T5 17.976V5q0-.825.588-1.413T7 3h10q.825 0 1.413.588T19 5v12.975q0 1.075-.9 1.663t-1.9.162L12 18Z'
    />
  </Svg>
);
