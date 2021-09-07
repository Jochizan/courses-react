import axios from 'axios';
import { ERROR, GET_USERS, LOADING } from 'src/types/usuarios.types';

export const getUsers = () => async (dispatch) => {
  dispatch({
    type: LOADING
  });

  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { err, message: err.message }
    });
  }
};
