import React from "react";
import { Todo } from "../interfaces/interfaces";
interface props {
  todo: Todo;
}

const TodoItem = ({ todo }: props) => {
  const handleDbClick = () => {
    console.log("dble", todo.description);
  };

  return (
    <li onDoubleClick={handleDbClick} key={todo.id}>
      {todo.description}
    </li>
  );
};

export default TodoItem;
