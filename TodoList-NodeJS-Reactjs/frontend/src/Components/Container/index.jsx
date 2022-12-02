import React, { useEffect, useState } from "react";

import List from "../List";
import Form from "../Form";

import { todo } from "../../services/todoServices";

import TodoProvider from "../../Context/TodoContext";

function Container() {
  const [todoList, setTodoList] = useState([]);

  const getTodos = async () => {
    const res = await todo.get();
    if (res) {
      return setTodoList(res);
    }
    return;
  };

  useEffect(async () => {
    await getTodos();
  }, []);

  return (
    <div>
      <TodoProvider>
        <Form />
        <List todoList={todoList} />
      </TodoProvider>
    </div>
  );
}

export default Container;
