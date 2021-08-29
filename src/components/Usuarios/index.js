import { useEffect } from 'react';
import { connect } from 'react-redux';

import Loader from '../Loader';
import * as userActions from '../../actions/usuarios.actions';

const Usuarios = ({ getUsers, usuarios, loading, error }) => {
  useEffect(() => {
    getUsers();
  }, []);

  console.log(loading, error);

  const ponerContenido = () => {
    if (loading) {
      return <Loader />;
    }

    return (
      <table className='tabla'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>{ponerFilas()}</tbody>
      </table>
    );
  };

  const ponerFilas = () =>
    usuarios.map((usuario, idx) => (
      <tr key={idx}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
      </tr>
    ));

  return <div>{ponerContenido()}</div>;
};

const mapUsersProps = (reducers) => {
  return reducers.usuariosReducers;
};

export default connect(mapUsersProps, userActions)(Usuarios);
