import { combineReducers } from 'redux';
import taskReducer from './tareas.reducer';
import userReducer from './usuarios.reducers';
import publicationReducer from './publicaciones.reducers';

export default combineReducers({
  userReducer,
  taskReducer,
  publicationReducer
});
