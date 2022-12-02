import React, { useState, createContext } from "react";

export const TodoContext = createContext();

export default function TodoProvider({ children }) {
  const [todo, setTodo] = useState({});

  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
