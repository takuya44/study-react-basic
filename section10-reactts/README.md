# メモ

# section10-reactts

<details><summary>propsに型を定義</summary>

```TypeScript
/import { VFC } from "react";
import { TodoType } from "./types/todo";

// 型指定①
// Pick：(props: Pick<TodoType, "title" | "userId" | "completed">)
// 型指定② 今回はidのみ不要なので、Omitでidを除外する。こちらの方が楽。
//  Omit<TodoType, "id">
const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  //   const { todo } = props;
  //   const { title, userId } = todo;
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";

  return <p>{`${completeMark} ${title}{ユーザー:${userId}}`}</p>;
};

export default Todo;
```

</details>

<details><summary>コンポーネントの型定義（VFC は children を許容しない）FC はしてしまうので使用しない</summary>

```TypeScript
{/* childrenの方指定をしていないため、下記はエラーになる */}
{/* <Text color="red" fontSize="18px">ddd</Text> */}

  const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";

  return <p>{`${completeMark} ${title}{ユーザー:${userId}}`}</p>;
};
```

</details>
