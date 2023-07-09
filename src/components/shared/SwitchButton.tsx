import { SizeTokens, Switch, XStack } from 'tamagui';
import { useState } from 'react';

interface SwitchButtonProps {
  size: SizeTokens;
  key: string;
  onCheckedChange: (val: boolean) => void;
}

export default function SwitchButton({
  size,
  key,
  onCheckedChange,
}: SwitchButtonProps) {
  const [checked, setChecked] = useState(false);

  const id = `switch-${key}`;
  return (
    <XStack className='z-50' alignItems='center' space='$4'>
      <Switch
        onCheckedChange={(val: boolean) => {
          setChecked(val);
          onCheckedChange(val);
        }}
        className={checked ? 'bg-primary' : ''}
        unstyled={false}
        id={id}
        size={size}
      >
        <Switch.Thumb animation='quick' />
      </Switch>
    </XStack>
  );
}
