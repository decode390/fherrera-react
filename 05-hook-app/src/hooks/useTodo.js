import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = ()=>{
  const storagedTodos = JSON.parse(localStorage.getItem('todos'));
  return storagedTodos || [];
}

export const useTodo = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (newTodo)=>{
    dispatchTodo({
      type: '[TODO] Add Todo',
      payload: newTodo
    });
  }

  const onDeleteTodo = (id)=>{
    dispatchTodo({
      type: '[TODO] Remove Todo',
      payload: id
    });
  }

  const onToggleTodo = (id) => {
    dispatchTodo({
      type: '[TODO] Toggle Todo',
      payload: id
    })
  }

  const todosCount = todos.length;
  const pendingTodosCount = todos.filter((todo => !todo.done)).length;

  return {
    todos,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
    todosCount,
    pendingTodosCount
  }
}
