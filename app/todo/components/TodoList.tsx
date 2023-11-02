import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { log } from "console";
import TodoItem from "./TodoItem";
import { useTodos } from "../hooks/useTodos";

const TodoList = () => {
  // const { todoState } = useContext(TodoContext);
  // const { todos } = todoState;
  const { todos } = useTodos();
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
