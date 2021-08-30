import { connect } from "react-redux";

const Table = ({ usuarios }) => {
  const ponerFilas = () => usuarios.map((usuario, idx) => (
    <tr key={idx}>
      <td>{usuario.name}</td>
      <td>{usuario.email}</td>
      <td>{usuario.website}</td>
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
  return reducers.usuariosReducers;
}

export default connect(mapStateProps)(Table);
