import { memo, VFC } from "react";
import { Box, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";

import dog01 from "../../img/dog01.jpg";
import UserCard from "../organisms/user/UserCard";

const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageUrl={dog01}
          userName="シモン"
          fullName="Ahimonn takuya"
        />
      </WrapItem>
    </Wrap>
  );
});

export default UserManagement;
