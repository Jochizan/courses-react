import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as taskActions from '../../actions/tareas.actions';
import Failed from '../General/Falied';
import Loader from '../General/Loader';

const Tareas = ({
  getTasks,
  deleteTask,
  changeCheck,
  tareas,
  loading,
  error
}) => {
  useEffect(() => {
    if (!Object.keys(tareas).length) {
      getTasks();
    }
  }, [tareas]);

  console.log(tareas);

  const showTask = (user_id) => {
    const byUser = {
      ...tareas[user_id]
    };

    return Object.keys(byUser).map((task_id) => (
      <div key={task_id}>
        <input
          type='checkbox'
          defaultChecked={byUser[task_id].completed}
          onChange={() => changeCheck(user_id, task_id)}
        />
        {byUser[task_id].title}
        <Link to={`/tareas/guardar/${user_id}/${task_id}`}>
          <button className='m-left'>Editar</button>
        </Link>
        <button className='m-left' onClick={() => deleteTask(task_id)}>
          Eliminar
        </button>
      </div>
    ));
  };

  const showContent = () => {
    if (loading) {
      return <Loader />;
    }

    if (Object.keys(error).length) {
      return <Failed message={error.message} />;
    }

    return Object.keys(tareas).map((user_id) => (
      <div key={user_id}>
        <h2>Usuario {user_id}</h2>
        <div className='contenedor_tareas'>{showTask(user_id)}</div>
      </div>
    ));
  };

  return (
    <div>
      <Link to='/tareas/guardar'>
        <button>Agregar</button>
      </Link>
      {showContent()}
    </div>
  );
};

const mapStateToProps = ({ taskReducer }) => taskReducer;

export default connect(mapStateToProps, taskActions)(Tareas);
