type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;
};

const Todo = (props: TodoType) => {
  //   const { todo } = props;
  //   const { title, userId } = todo;
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";

  return <p>{`${completeMark} ${title}{ユーザー:${userId}}`}</p>;
};

export default Todo;
