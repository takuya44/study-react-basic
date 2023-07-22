import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { User } from "../types/user";

type LoginUserContextType = {
  loginUser: User | null;
  setLoginUser: Dispatch<SetStateAction<User | null>>;
};

// 1.初期値は{} as LoginUserContextType
// 2.これは、LoginUserContextTypeの型を持つ空のオブジェクトという意味
// 3.これを指定することで、LoginUserContext.Providerのvalueに渡す値の型を指定できる
// 4.指定しないと、valueに渡す値の型が不明なため、エラーが発生
// 5.型を指定することで、エラーを防ぐことができる
const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | null>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
