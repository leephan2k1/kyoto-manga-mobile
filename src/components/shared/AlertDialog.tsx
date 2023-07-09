import { AlertDialog, Button, XStack, YStack } from 'tamagui';
import { ReactNode } from 'react';

interface AlertDialogDemoProps {
  CustomButton: ReactNode;
  dialogTitle: string;
  dialogDesc: string;
  dialogConfirmLabel: string;
  dialogCancelLabel: string;
  onActionConfirm: () => void;
}

export default function AlertDialogConfirm({
  dialogDesc,
  dialogTitle,
  dialogCancelLabel,
  dialogConfirmLabel,
  CustomButton,
  onActionConfirm,
}: AlertDialogDemoProps) {
  return (
    <AlertDialog native>
      <AlertDialog.Trigger asChild>{CustomButton}</AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay
          key='overlay'
          animation='quick'
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <AlertDialog.Content
          bordered
          elevate
          key='content'
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
        >
          <YStack space>
            <AlertDialog.Title>{dialogTitle}</AlertDialog.Title>
            <AlertDialog.Description>{dialogDesc}</AlertDialog.Description>

            <XStack space='$3' justifyContent='flex-end'>
              <AlertDialog.Action
                onPress={() => {
                  onActionConfirm();
                }}
                asChild
              >
                <Button theme='active'>{dialogConfirmLabel}</Button>
              </AlertDialog.Action>

              <AlertDialog.Cancel asChild>
                <Button>{dialogCancelLabel}</Button>
              </AlertDialog.Cancel>
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  );
}
