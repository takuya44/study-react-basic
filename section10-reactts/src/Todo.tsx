import { TodoType } from "./types/todo";

// 型指定①
// Pick：(props: Pick<TodoType, "title" | "userId" | "completed">)
// 型指定② 今回はidのみ不要なので、Omitでidを除外する。こちらの方が楽。
//  Omit<TodoType, "id">
const Todo = (props: Omit<TodoType, "id">) => {
  //   const { todo } = props;
  //   const { title, userId } = todo;
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";

  return <p>{`${completeMark} ${title}{ユーザー:${userId}}`}</p>;
};

export default Todo;
