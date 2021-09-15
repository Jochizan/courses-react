import axios from 'axios';
import {
  GET_TASKS,
  SET_TASK,
  LOADING,
  ERROR,
  SAVE_TASK
} from '../types/tareas.types';

export const getTasks = () => async (dispatch) => {
  dispatch({
    type: LOADING
  });

  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');

    const tasks = {};

    res.data.map(
      (task) =>
        (tasks[task.userId] = {
          ...tasks[task.userId],
          [task.id]: {
            ...task
          }
        })
    );

    dispatch({
      type: GET_TASKS,
      payload: tasks
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { err, message: err.message }
    });
  }
};

export const handleValues = (e) => (dispatch, getState) => {
  const { name, value } = e.target;
  const { tarea } = getState().taskReducer;

  const newTask = { ...tarea, [name]: value };

  dispatch({
    type: SET_TASK,
    payload: newTask
  });
};

export const createTask = (newTask) => async (dispatch) => {
  dispatch({
    type: LOADING
  });

  try {
    const res = await axios.post(
      'https://jsonplaceholder.typicode/todos',
      newTask
    );

    dispatch({
      type: SAVE_TASK
    });

    dispatch({
      type: SET_TASK,
      payload: { user_id: '', title: '' }
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { err, message: err.message }
    });
  }
};
