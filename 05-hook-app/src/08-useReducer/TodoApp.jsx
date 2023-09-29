import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks";

export const TodoApp = () => {
  const {
    todos, 
    onNewTodo, 
    onDeleteTodo, 
    onToggleTodo,
    todosCount,
    pendingTodosCount,
  } = useTodo()

  return (
    <>
      <h1>
        TodoApp: {todosCount} 
        <small>
          pendientes: {pendingTodosCount}
        </small>
      </h1>
      <hr/>

      <div className="row">
        <div className="col-7">
          <TodoList 
            todos={todos} 
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <TodoAdd onNewTodo={onNewTodo}/>
        </div>
      </div>

    </>
  )
}
