import React, { useReducer } from "react";
import { TodoContext } from "./TodoContext";
import { JsxElement } from "typescript";
import { TodoState } from "../interfaces/interfaces";
import { todoReducer } from "./todoReducer";
import { initialize } from "next/dist/server/lib/render-server";

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
  ],
  completed: 0,
  pending: 2,
};

interface TodoProviderProps {
  children: JSX.Element | Jsx.Element[];
}

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);
  return (
    <TodoContext.Provider value={{ todoState }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
