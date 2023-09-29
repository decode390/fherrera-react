
const initialState = [{
  id: 1,
  todo: 'Recolectar piedra del alma',
  done: false
}];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === '[TODO] add toDo') {
    return ([...state, action.payload])
  }


  return state;
}

let todos = todoReducer();

console.log(todos);

const newTodo = {
  id: 2,
  todo: 'Recolectar piedra del poder',
  done: false
};

const addTodoAction = {
  type: '[TODO] add toDo',
  payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log(todos);
