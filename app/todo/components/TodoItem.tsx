// import React, { useContext } from "react";
import { Todo } from "../interfaces/interfaces";
// import { TodoContext } from "../context/TodoContext";
import { useTodos } from "../hooks/useTodos";
interface props {
  todo: Todo;
}

const TodoItem = ({ todo }: props) => {
  // const { toggleTodo } = useContext(TodoContext);
  const { toggleTodo } = useTodos();

  // const handleDbClick = () => {
  //   toggleTodo(todo.id);
  // };

  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "",
      }}
      onDoubleClick={() => {
        toggleTodo(todo.id);
      }}
      key={todo.id}
    >
      {todo.description}
    </li>
  );
};

export default TodoItem;
