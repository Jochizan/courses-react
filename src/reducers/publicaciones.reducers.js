import { ERROR, LOADING, GET_BY_USER } from '../types/publicaciones.types';

const INITIAL_STATE = {
  publicaciones: [],
  loading: false,
  error: {}
};

const publicationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BY_USER:
      return {
        ...state,
        publicaciones: action.payload,
        loading: false,
        error: {}
      };

    case LOADING:
      return { ...state, loading: true };

    case ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default publicationReducer;
