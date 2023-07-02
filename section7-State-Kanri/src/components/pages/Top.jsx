import React, { useContext } from "react";
import styled from "styled-components";
import SecondaryButton from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  // 1.stateの値の「更新」のみを行う場合は「useSetRecoilState」を使用する
  // 2.stateの値を読み取るコンポーネントは、stateが更新されると自動的にレンダリングされます。
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

export default Top;

const SContainer = styled.div`
  text-align: center;
  height: 100vh;
`;
