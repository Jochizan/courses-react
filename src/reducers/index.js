import { combineReducers } from 'redux';
import userReducer from './usuarios.reducers';
import publicationReducer from './publicaciones.reducers';

export default combineReducers({
  userReducer,
  publicationReducer
});
