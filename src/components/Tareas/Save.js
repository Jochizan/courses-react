import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as taskActions from '../../actions/tareas.actions';
import Failed from '../General/Falied';
import Loader from '../General/Loader';

const Save = ({
  match: {
    params: { usr_id, task_id }
  },
  tarea: { user_id, title },
  tareas,
  error,
  back,
  loading,
  cleanForm,
  handleTask,
  handleValues,
  createTask,
  editTask
}) => {
  useEffect(() => {
    if (usr_id && task_id) {
      const task = tareas[usr_id][task_id];
      handleTask(task);
    } else {
      cleanForm();
    }
  }, []);

  const handleChange = (e) => {
    handleValues(e);
  };

  const saveTask = () => {
    const newTask = {
      userId: user_id,
      titulo: title,
      completed: false
    };

    if (usr_id && task_id) {
      const task = tareas[usr_id][task_id];
      const edit_task = {
        ...newTask,
        completed: task.completed,
        id: task.id
      };

      editTask(edit_task);
    } else {
      createTask(newTask);
    }
  };

  const handleShow = () => {
    if (Object.keys(error).length) {
      return <Failed message={error.message} />;
    }

    if (loading) {
      return <Loader />;
    }
  };

  return (
    <div>
      {back ? <Redirect to='/tareas' /> : null}
      <h1>Guardar Tarea</h1>
      Usuario id:
      <input
        type='number'
        name='user_id'
        onChange={handleChange}
        value={user_id}
      />
      <br />
      <br />
      Título:
      <input type='text' name='title' onChange={handleChange} value={title} />
      <br />
      <br />
      <button onClick={saveTask} disabled={!user_id || !title}>
        Guardar
      </button>
      <br />
      {handleShow()}
    </div>
  );
};

const mapStateToProps = ({ taskReducer }) => taskReducer;

export default connect(mapStateToProps, taskActions)(Save);
