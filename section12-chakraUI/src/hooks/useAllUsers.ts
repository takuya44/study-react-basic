/* eslint-disable react-hooks/exhaustive-deps */
// showMessageがcatch以降の処理で動的に変更される可能性がないため設定で無視した。
import { useCallback, useState } from "react";
import axios from "axios";

import { User } from "../types/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  // hooks\useMessage.tsのuseMessage()を呼び出している。
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

  // useCallbackで囲むことで、再レンダリング時に再生成されることを防ぐ。
  const getUsers = useCallback(() => {
    setLoading(true);

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => {
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { getUsers, users, loading };
};
