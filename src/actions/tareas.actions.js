import axios from 'axios';
import { GET_TASKS, LOADING, ERROR } from '../types/tareas.types';

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
