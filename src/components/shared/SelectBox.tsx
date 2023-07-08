import { useState } from 'react';
import { Adapt, Select, SelectProps, Sheet, XStack, YStack } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';
import { CheckIcon, ChevronLeftIcon } from '~/components/icons';

interface SelectBoxProps extends SelectProps {
  placeholder: string;
  selectLabel: string;
  items: { name: string; value: string }[];
}

export function SelectBox({
  placeholder,
  selectLabel,
  items,
  ...props
}: SelectBoxProps) {
  const [val, setVal] = useState('Guava');

  return (
    <Select value={val} onValueChange={setVal} {...props}>
      <Select.Trigger
        width={180}
        iconAfter={
          <ChevronLeftIcon width={16} height={16} className='-rotate-90' />
        }
      >
        <Select.Value placeholder={placeholder} />
      </Select.Trigger>

      <Adapt when='sm' platform='touch'>
        <Sheet native modal dismissOnSnapToBottom>
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          alignItems='center'
          justifyContent='center'
          position='relative'
          width='100%'
          height='$3'
        >
          <YStack zIndex={10}>
            <ChevronLeftIcon width={16} height={16} className='rotate-90' />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={['$background', '$backgroundTransparent']}
            borderRadius='$4'
          />
        </Select.ScrollUpButton>

        <Select.Viewport minWidth={200}>
          <XStack>
            <Select.Group space='$4'>
              <Select.Label color='#f5c702'>{selectLabel}</Select.Label>
              {items.map((item, i) => {
                return (
                  <Select.Item index={i} key={item.name} value={item.value}>
                    <Select.ItemText>{item.name}</Select.ItemText>
                    <Select.ItemIndicator marginLeft='auto'>
                      <CheckIcon width={16} heigh={16} color='#5c702' />
                    </Select.ItemIndicator>
                  </Select.Item>
                );
              })}
            </Select.Group>
            {/* special icon treatment for native */}
            {props.native && (
              <YStack
                position='absolute'
                right={0}
                top={0}
                bottom={0}
                alignItems='center'
                justifyContent='center'
                width={'$4'}
                pointerEvents='none'
              >
                <ChevronLeftIcon
                  width={16}
                  height={16}
                  className='-rotate-90'
                />
              </YStack>
            )}
          </XStack>
        </Select.Viewport>

        <Select.ScrollDownButton
          alignItems='center'
          justifyContent='center'
          position='relative'
          width='100%'
          height='$3'
        >
          <YStack zIndex={10}>
            <ChevronLeftIcon width={16} height={16} className='-rotate-90' />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={['$backgroundTransparent', '$background']}
            borderRadius='$4'
          />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  );
}
