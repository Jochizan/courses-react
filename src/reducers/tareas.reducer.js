import { ERROR, GET_TASKS, LOADING } from '../types/tareas.types';

const INITIAL_STATE = {
  tareas: {},
  loading: false,
  error: {}
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TASKS:
      return { ...state, tareas: action.payload, loading: false, error: {} };

    case LOADING:
      return { ...state, loading: true };

    case ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default taskReducer;
