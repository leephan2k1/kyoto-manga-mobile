import { Sheet, SheetProps } from '@tamagui/sheet';
import { Dispatch, PropsWithChildren, SetStateAction } from 'react';

interface InnerSheetProps extends SheetProps, PropsWithChildren {
  setOpenInnerGenresModal: Dispatch<SetStateAction<boolean>>;
}
export default function InnerSheet({
  children,
  setOpenInnerGenresModal,
  ...props
}: InnerSheetProps) {
  return (
    <Sheet
      modal
      snapPoints={[80]}
      dismissOnSnapToBottom
      {...props}
      onOpenChange={(innerState: boolean) => {
        setOpenInnerGenresModal(innerState);
      }}
    >
      <Sheet.Overlay />
      <Sheet.Handle />
      <Sheet.Frame
        flex={1}
        justifyContent='center'
        alignItems='center'
        space='$5'
      >
        <Sheet.ScrollView padding='$4' space>
          {children}
        </Sheet.ScrollView>
      </Sheet.Frame>
    </Sheet>
  );
}
