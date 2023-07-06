import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

const UserProfile: VFC<Props> = (props) => {
  const { user } = props;

  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/* オプショナルチューニング */}
      <dd>{user.hobbies ? user.hobbies?.join(" / ") : "趣味なし"}</dd>
    </dl>
  );
};

export default UserProfile;
