import { Sheet } from '@tamagui/sheet';
import { Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

export interface SheetModalProps extends PropsWithChildren {
  open: boolean;
  snapPoints: number[];
  setOpenSheetFilter: Dispatch<SetStateAction<boolean>>;
}

export default function SheetModal({
  children,
  snapPoints,
  open,
  setOpenSheetFilter,
}: SheetModalProps) {
  const [position, setPosition] = useState(0);
  const [modal, setModal] = useState(true);
  const [innerOpen, setInnerOpen] = useState(false);

  return (
    <>
      <Sheet
        forceRemoveScrollEnabled={open}
        modal={true}
        open={open}
        onOpenChange={setOpenSheetFilter}
        snapPoints={snapPoints}
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
        zIndex={100_000}
        animation='bouncy'
      >
        <Sheet.Overlay />
        <Sheet.Handle />
        <Sheet.Frame flex={1} padding='$4' space='$0'>
          {children}
        </Sheet.Frame>
      </Sheet>
    </>
  );
}
