import { useState } from "react";
import { UserProfile } from "../types/UserProfile";
import { User } from "../types/api/user";
import axios from "axios";

// 全ユーザー一覧を取得するカスタムフック
export const useAllUsers = () => {
  const [UserProfiles, setUserProfiles] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
    setLoading(true);
    setError(false);

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`,
        }));
        setUserProfiles(data);
      })
      .catch(() => {
        setError(true);
        throw new Error("ユーザー取得に失敗しました。");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { getUsers, UserProfiles, loading, error };
};
