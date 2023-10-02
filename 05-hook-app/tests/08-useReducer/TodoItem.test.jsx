import { fireEvent, render, screen } from"@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/TodoItem"


describe('test in TodoItem component', () => {
  const todo = {
    id: 1,
    description: 'test todo1',
    done: false
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(()=> jest.clearAllMocks());

  test('should be show pending todo', () => {
    render(
      <TodoItem 
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )

    const spanElement = screen.getByLabelText('span')
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });


  test('should be load complete todo', () => {
    todo.done = true;

    render(
      <TodoItem 
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )

    const spanElement = screen.getByLabelText('span')
    expect(spanElement.className).toContain('text-decoration-line-through');
  });


  test('should be call onToggleTodo on click in span', () => {
    render(
      <TodoItem 
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )

    const spanElement = screen.getByLabelText('span')
    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalled();
    expect(onToggleTodoMock).toHaveBeenCalledWith(1);
  });


  test('should be call onDeleteTodo on click in button', () => {
    render(
      <TodoItem 
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )

    const buttonDelete = screen.getByRole('button');
    fireEvent.click(buttonDelete);

    expect(onDeleteTodoMock).toHaveBeenCalled();
    expect(onDeleteTodoMock).toHaveBeenCalledWith(1);
  });

})
