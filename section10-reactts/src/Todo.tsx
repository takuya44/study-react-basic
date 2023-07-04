const Todo = (props) => {
  //   const { todo } = props;
  //   const { title, userId } = todo;
  const { title, userId } = props;

  return <p>{`${title}{ユーザー:${userId}}`}</p>;
};

export default Todo;
