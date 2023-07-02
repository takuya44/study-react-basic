import React, { memo, useContext } from "react";
import styled from "styled-components";
// import { UserContext } from "../../../providers/UserProvider";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

const UserIconWithName = memo((props) => {
  const { name, image } = props;
  // const { userInfo } = useContext(UserContext);
  // 1.stateの値の「取得」のみを行う場合は「useRecoilValue」を使用する
  // 2.stateの値を読み取るコンポーネントは、stateが更新されると自動的にレンダリングされます。
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  console.log("UserIconWithName");

  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

export default UserIconWithName;

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
