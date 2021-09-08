import axios from 'axios';
import { LOADING, GET_BY_USER, ERROR } from 'src/types/publicaciones.types';

export const getByUser = (key) => async (dispatch, getState) => {
  dispatch({
    type: LOADING
  });
  try {
    const { usuarios } = getState().userReducer;
    const { publicaciones } = getState().publicationReducer;
    const user_id = usuarios[key].id;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
    );

    const publications_update = [...publicaciones, res.data];

    dispatch({
      type: GET_BY_USER,
      payload: publications_update
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      error: { message: 'Error user', err }
    });
  }
};
