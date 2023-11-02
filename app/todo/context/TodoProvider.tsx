import React, { useReducer } from "react";
import { TodoContext } from "./TodoContext";
import { TodoState } from "../interfaces/interfaces";
import { todoReducer } from "./todoReducer";

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: "1",
      description: "Recolectar las piedras",
      completed: false,
    },
    {
      id: "2",
      description: "Recolectar las maderas",
      completed: false,
    },
    {
      id: "3",
      description: "Recolectar las teclas",
      completed: false,
    },
    {
      id: "4",
      description: "Recolectar las tazas",
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
};

interface TodoProviderProps {
  children: JSX.Element | Jsx.Element[];
}

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);
  const toggleTodo = (id: string) => {
    dispatch({ type: "toggleTodo", payload: { id } });
  };
  return (
    <TodoContext.Provider value={{ todoState, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
