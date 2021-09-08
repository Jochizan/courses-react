import { ERROR, GET_USERS, LOADING } from '../types/usuarios.types';

const INITIAL_STATE = {
  usuarios: [],
  loading: false,
  error: {}
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, usuarios: action.payload, loading: false, error: {} };

    case LOADING:
      return { ...state, loading: true };

    case ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default userReducer;
