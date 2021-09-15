import {
  ERROR,
  GET_TASKS,
  LOADING,
  SAVE_TASK,
  SET_TASK
} from '../types/tareas.types';

const INITIAL_STATE = {
  tareas: {},
  loading: false,
  error: {},
  tarea: {
    user_id: '',
    title: ''
  }
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TASKS:
      return { ...state, tareas: action.payload, loading: false, error: {} };

    case SET_TASK:
      return { ...state, tarea: action.payload };

    case SAVE_TASK:
      return { ...state, tareas: {}, loading: false, error: {} };

    case LOADING:
      return { ...state, loading: true };

    case ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default taskReducer;
