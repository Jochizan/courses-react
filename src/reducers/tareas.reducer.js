import {
  ERROR,
  GET_TASKS,
  LOADING,
  SAVE_TASK,
  SET_TASK,
  UPDATE
} from '../types/tareas.types';

const INITIAL_STATE = {
  tareas: {},
  loading: false,
  error: {},
  tarea: {
    user_id: '',
    title: ''
  },
  back: false
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tareas: action.payload,
        back: false,
        loading: false,
        error: {}
      };

    case SET_TASK:
      return { ...state, tarea: action.payload };

    case SAVE_TASK:
      return {
        ...state,
        tareas: {},
        back: true,
        loading: false,
        error: {},
        tarea: { user_id: '', title: '' }
      };

    case LOADING:
      return { ...state, loading: true };

    case ERROR:
      return { ...state, error: action.payload, loading: false };

    case UPDATE:
      return { ...state, tareas: action.payload };

    default:
      return state;
  }
};

export default taskReducer;
