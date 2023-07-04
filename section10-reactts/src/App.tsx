import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Todo from "./Todo";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  // 別解：const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<TodoType[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>Click me</button>
      {todos.map((todo: any) => (
        // <Todo todo={todo} />
        <Todo title={todo.title} userId={todo.userId} />
      ))}
    </div>
  );
}

export default App;
