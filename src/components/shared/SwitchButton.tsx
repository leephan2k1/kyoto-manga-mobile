import { SizeTokens, Switch, XStack } from 'tamagui';
import { useState } from 'react';

export default function SwitchButton(props: { size: SizeTokens }) {
  const [checked, setChecked] = useState(false);

  const id = `switch-${props.size.toString().slice(1)}`;
  return (
    <XStack className='z-50' alignItems='center' space='$4'>
      <Switch
        onCheckedChange={(val: boolean) => {
          setChecked(val);
        }}
        className={checked ? 'bg-primary' : ''}
        unstyled={false}
        id={id}
        size={props.size}
      >
        <Switch.Thumb animation='quick' />
      </Switch>
    </XStack>
  );
}
