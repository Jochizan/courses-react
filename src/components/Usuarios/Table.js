import { connect } from 'react-redux';
import Eye from '../General/Eye';
import { Link } from 'react-router-dom';

const Table = ({ usuarios }) => {
  const ponerFilas = () =>
    usuarios.map((usuario, idx) => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
        <td>
          <Link to={`/publicaciones/${idx}`}>
            <Eye />
          </Link>
        </td>
      </tr>
    ));

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

const mapStateProps = (reducers) => {
  return reducers.userReducer;
};

export default connect(mapStateProps)(Table);
