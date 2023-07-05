import Svg, { Path } from 'react-native-svg';

export function FilterListRoundedIcon(props: any) {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width={32}
      height={32}
      viewBox='0 0 24 24'
      {...props}
    >
      <Path
        fill='currentColor'
        d='M11 18q-.425 0-.713-.288T10 17q0-.425.288-.713T11 16h2q.425 0 .713.288T14 17q0 .425-.288.713T13 18h-2ZM4 8q-.425 0-.713-.288T3 7q0-.425.288-.713T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8H4Zm3 5q-.425 0-.713-.288T6 12q0-.425.288-.713T7 11h10q.425 0 .713.288T18 12q0 .425-.288.713T17 13H7Z'
      />
    </Svg>
  );
}
