import { useCallback, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { User } from "../types/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            setLoginUser(res.data);
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "ログインに失敗しました", status: "error" });
            setLoading(false);
          }
        })
        .catch((error) => {
          // Toaster
          showMessage({ title: "ログインに失敗しました", status: "error" });

          // Check if error is network related
          if (!error.response) {
            alert("ネットワークエラー: サーバーに接続できませんでした");
          }
          // Check if error response status is 404 (Not Found)
          else if (error.response.status === 404) {
            alert("エラー: 指定したユーザーは存在しません");
          }
          // Check if error response status is 500 (Internal Server Error)
          else if (error.response.status === 500) {
            alert("エラー: サーバー内部で問題が発生しました");
          }
          // Other unexpected status codes
          else {
            alert(`未知のエラー: ${error.response.status}`);
          }

          setLoading(false);
        });
    },
    [history, showMessage, setLoginUser]
  );

  return { login, loading };
};
