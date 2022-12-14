import { ADD_TODO_SUCCESS, ADD_TODO_FAILURE, ADD_TODO_STARTED, DELETE_TODO, FETCH_TODO} from "../actions/todoActions";

const initialState = {
  loading: false,
  todos: [],
  error: null,
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TODO_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: [...state.todos, action.payload],
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case DELETE_TODO:
      let cloneTodos = state.todos;
      cloneTodos.splice(action.payload, 1);
      return {
        ...state,
        todos: [...cloneTodos],
      };
    default:
      return state;
  }
}
