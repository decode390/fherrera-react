import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('test in todoReducer', () => {
  const initialState = [{
    id: 1,
    description: 'test ToDo',
    done: false
  }];


  test('should be return initial state', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });


  test('should be add todo', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'two toDo',
        done: false
      }
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });


  test('should be remove todo', () => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: 1
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });


  test('should be toggle todo', () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1
    };

    const state = todoReducer(initialState, action);
    expect(state[0].done).toBeTruthy();
    const state2 = todoReducer(state, action);
    expect(state2[0].done).toBeFalsy();
  });

});
