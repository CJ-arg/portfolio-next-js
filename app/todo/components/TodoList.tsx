import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { log } from "console";

const TodoList = () => {
  const { todoState } = useContext(TodoContext);
  const { todos } = todoState;
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.description} </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
