import { memo, useCallback, useEffect, VFC } from "react";
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import UserCard from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

import UserDetailModal from "../organisms/user/UserDetailModal";

const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();

  // 初回レンダリング時にユーザー一覧を取得
  useEffect(() => getUsers(), [getUsers]);

  // ユーザーをクリックした時にモーダルを開く
  const onClickUser = useCallback(() => onOpen(), [onOpen]);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                imageUrl={"https://via.placeholder.com/600/92c952"}
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});

export default UserManagement;
