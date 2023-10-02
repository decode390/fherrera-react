import { render, renderHook, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo");

  const onNewTodoMock = jest.fn(v => v)
  const onDeleteTodMock = jest.fn(v => v)
  const onToggleTodMock = jest.fn(v => v)


describe('test in TodoApp', () => {

  useTodo.mockReturnValue({
    todos: [
      {id: 1, description: 'Todo 1', done: false},
      {id: 2, description: 'Todo 2', done: true},
    ],
    onNewTodo: onNewTodoMock,
    onDeleteTodo: onDeleteTodMock,
    onToggleTodo: onToggleTodMock,
    todosCount: 2,
    pendingTodosCount: 1
  })

  test('should be show component correctly', () => {
    render(<TodoApp />)

    expect( screen.getByText('Todo 1')).toBeTruthy();
    expect( screen.getByText('Todo 2')).toBeTruthy();
    expect( screen.getByRole('textbox')).toBeTruthy();
  });
});
