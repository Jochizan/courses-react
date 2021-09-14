import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as taskActions from '../../actions/tareas.actions';
import Failed from '../General/Falied';
import Loader from '../General/Loader';

const Tareas = ({ getTasks, tareas, loading, error }) => {
  useEffect(() => {
    getTasks();
  }, []);

  const showTask = (user_id) => {
    const byUser = {
      ...tareas[user_id]
    };

    return Object.keys(byUser).map((task_id) => (
      <div key={task_id}>
        <input type='checkbox' defaultChecked={byUser[task_id].completed} />
        {byUser[task_id].title}
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
      <h1>Tareas Saludar</h1>
      {showContent()}
    </div>
  );
};

const mapStateToProps = ({ taskReducer }) => taskReducer;

export default connect(mapStateToProps, taskActions)(Tareas);
