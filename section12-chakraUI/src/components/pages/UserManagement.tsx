/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, VFC } from "react";
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";

// import dog01 from "../../img/dog01.jpg";
import UserCard from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();

  // 初回レンダリング時にユーザー一覧を取得
  useEffect(() => getUsers(), []);

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
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});

export default UserManagement;
