import axios from 'axios';
import {
  LOADING,
  UPDATE,
  ERROR,
  COM_L,
  COM_R,
  COM_U
} from 'src/types/publicaciones.types';
import { GET_USERS } from 'src/types/usuarios.types';

export const getByUser = (key) => async (dispatch, getState) => {
  dispatch({
    type: LOADING
  });

  const { usuarios } = getState().userReducer;
  const { publicaciones } = getState().publicationReducer;
  const user_id = usuarios[key].id;

  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
    );

    const newData = res.data.map((publication) => ({
      ...publication,
      comments: [],
      open: false
    }));

    const publications_update = [...publicaciones, newData];

    const publication_key = publications_update.length - 1;
    const users_update = [...usuarios];
    users_update[key] = {
      ...usuarios[key],
      publication_key
    };

    dispatch({
      type: GET_USERS,
      payload: users_update
    });

    dispatch({
      type: UPDATE,
      payload: publications_update
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { message: 'Error Fatal', err }
    });
  }
};

export const openAndClose = (key, idx) => (dispatch, getState) => {
  const { publicaciones } = getState().publicationReducer;
  const select = publicaciones[key][idx];

  const update = {
    ...select,
    open: !select.open
  };

  const publications_update = [...publicaciones];
  publications_update[key] = [...publicaciones[key]];
  publications_update[key][idx] = update;

  dispatch({
    type: UPDATE,
    payload: publications_update
  });
};

export const getComments = (key, idx) => async (dispatch, getState) => {
  dispatch({
    type: COM_L
  });

  const { publicaciones } = getState().publicationReducer;
  const select = publicaciones[key][idx];

  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${select.id}`
    );

    const update = {
      ...select,
      comments: res.data
    };

    const publications_update = [...publicaciones];
    publications_update[key] = [...publicaciones[key]];
    publications_update[key][idx] = update;

    dispatch({
      type: COM_U,
      payload: publications_update
    });
  } catch (err) {
    dispatch({
      type: COM_R,
      payload: { message: 'Error get comments', err }
    });
  }
};
