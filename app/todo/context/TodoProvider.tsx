import React from "react";
import { TodoContext } from "./TodoContext";

const TodoProvider = () => {
  return <TodoContext.Provider>{children}</TodoContext.Provider>;
};

export default TodoProvider;
