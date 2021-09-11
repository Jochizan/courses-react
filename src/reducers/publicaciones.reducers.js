import {
  COM_L,
  COM_R,
  COM_U,
  ERROR,
  LOADING,
  UPDATE
} from '../types/publicaciones.types';

const INITIAL_STATE = {
  publicaciones: [],
  loading: false,
  comLoading: false,
  error: {},
  comError: {}
};

const publicationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        publicaciones: action.payload,
        loading: false,
        comLoading: false,
        error: {}
      };

    case LOADING:
      return {
        ...state,
        loading: true
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case COM_L:
      return {
        ...state,
        comLoading: true
      };

    case COM_R:
      return {
        ...state,
        comError: action.payload,
        comLoading: false
      };

    case COM_U:
      return {
        ...state,
        publicaciones: action.payload,
        comLoading: false,
        comError: {}
      };

    default:
      return state;
  }
};

export default publicationReducer;
