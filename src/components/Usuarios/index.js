import { useEffect } from 'react';
import { connect } from 'react-redux';

import Table from './Table';
import Loader from '../General/Loader';
import Failed from '../General/Falied';
import * as userActions from '../../actions/usuarios.actions';

const Usuarios = ({ usuarios, getUsers, loading, error }) => {
  useEffect(() => {
    if (!usuarios.length) {
      getUsers();
    }
  }, []);

  const ponerContenido = () => {
    if (loading) {
      return <Loader />;
    }

    if (Object.keys(error).length) {
      return <Failed {...error} />;
    }

    return <Table />;
  };

  return (
    <div>
      <h1>Usuarios</h1>
      {ponerContenido()}
    </div>
  );
};

const mapUsersProps = (reducers) => {
  return reducers.userReducer;
};

export default connect(mapUsersProps, userActions)(Usuarios);
