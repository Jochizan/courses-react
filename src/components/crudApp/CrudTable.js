import { useContext } from 'react';
import CrudTableRow from './CrudTableRow';
import CrudContext from '../../context/CrudContext';

const CrudTable = () => {
  const { db } = useContext(CrudContext);

  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {db.length > 0 ? (
            db.map((el) => (
              <CrudTableRow
                key={el.id}
                data={el}
              />
            ))
          ) : (
            <tr>
              <td colSpan='3'>Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
