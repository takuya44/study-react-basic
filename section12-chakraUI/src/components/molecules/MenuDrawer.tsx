import { memo, VFC } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

const MenuDrawer: VFC<Props> = memo((prosp) => {
  const { onClose, isOpen } = prosp;

  return (
    <Drawer placement="left" size="xs" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody p={0} bg="gray.100">
          <Button w="100%">TOP</Button>
          <Button w="100%">ユーザー一覧</Button>
          <Button w="100%">設定</Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});

export default MenuDrawer;
