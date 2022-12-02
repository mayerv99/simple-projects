import { useContext } from "react";

import { TodoContext } from "../Context/todoContext";

export default function useTodo() {
  const { todo, setTodo } = useContext(TodoContext);
  return { todo, setTodo };
}
