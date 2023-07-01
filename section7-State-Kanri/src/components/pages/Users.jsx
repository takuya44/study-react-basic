import styled from "styled-components";
import SearchInput from "../molecules/SearchInput";
import UserCard from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `シモン${val}`,
    image: "./img/dog01.jpg",
    email: "1111@aaa.com",
    phone: "090-1111-1111",
    company: {
      name: "テスト株式会社",
    },
    website: "https://google.com",
  };
});

const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

export default Users;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(200px, 1fr)
  ); // 200px以上の場合は1fr
  grid-gap: 20px;
`;
