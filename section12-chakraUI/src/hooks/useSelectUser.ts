import { useCallback, useState } from "react";

import { User } from "../types/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // ユーザー選択
  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;

    // ユーザー情報を取得
    // 補足：findメソッドは、条件に一致した最初の要素を返す、ない場合はundefinedを返す
    const targetUser = users.find((user) => user.id === id);
    // 対策①:絶対にあるよとTSに伝える処理「今回は取得したUser[]の型からデータ取得するのでこのやり方でOK」
    setSelectedUser(targetUser!);
    // 対策②
    // setSelectedUser(targetUser ?? null);

    // モーダルを開く
    onOpen();
  }, []);

  return { onSelectUser, selectedUser };
};
