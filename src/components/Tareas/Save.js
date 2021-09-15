import { connect } from 'react-redux';
import * as taskActions from '../../actions/tareas.actions';

const Save = ({ tarea: { user_id, title }, handleValues, createTask }) => {
  const handleChange = (e) => {
    handleValues(e);
  };

  const saveTask = () => {
    const newTask = {
      userId: user_id,
      titulo: title,
      completed: false
    };

    createTask(newTask);
  };

  console.log(user_id, title);

  return (
    <div>
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
      <button onClick={saveTask}>Guardar</button>
    </div>
  );
};

const mapStateToProps = ({ taskReducer }) => taskReducer;

export default connect(mapStateToProps, taskActions)(Save);
