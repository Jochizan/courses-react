import axios from 'axios';
import {
  GET_PUBLICATIONS,
  LOADING,
  ERROR
} from 'src/types/publicaciones.types';

export const getPublications = () => async (dispatch) => {
  dispatch({
    type: LOADING
  });
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

    dispatch({
      type: GET_PUBLICATIONS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { err, message: err.message }
    });
  }
};
