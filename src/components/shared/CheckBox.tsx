import { Checkbox, Label, SizeTokens, XStack } from 'tamagui';
import { CheckIcon } from '~/components/icons';

export function CheckboxWithLabel({
  label,
  value,
  ...props
}: {
  label: string;
  value: string;
  size: SizeTokens;
  defaultChecked?: boolean;
}) {
  const id = `checkbox-${value}`;

  return (
    <XStack width={300} alignItems='center' space='$4'>
      <Checkbox id={id} size={props.size} defaultChecked={props.defaultChecked}>
        <Checkbox.Indicator>
          <CheckIcon width={16} height={16} className='text-primary' />
        </Checkbox.Indicator>
      </Checkbox>

      <Label size={props.size} htmlFor={id}>
        {label}
      </Label>
    </XStack>
  );
}
