import React from "react";

function List({ todoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <li>{todo.name}</li>
      ))}
    </ul>
  );
}

export default List;
