// import react, { useContext } from "react";
import styled from "styled-components";
import SearchInput from "../molecules/SearchInput";
import UserCard from "../organisms/user/UserCard";
import SecondaryButton from "../atoms/button/SecondaryButton";
// import { UserContext } from "../../providers/UserProvider";
// 1.stateの取得・更新を行う場合、useRecoilState()を使用
// 2.stateの値を読み取るコンポーネントは、stateが更新されると自動的にレンダリングされます。
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

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
  // const { userInfo, setUserInfo } = useContext(UserContext);
  // 1.stateの「取得・更新」を行う場合、「useRecoilState」を使用する
  // 2.stateの値を読み取るコンポーネントは、stateが更新されると自動的にレンダリングされます。
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
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
