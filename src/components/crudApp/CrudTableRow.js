import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import CrudContext from '../../context/CrudContext';

const CrudTableRow = ({ data }) => {
  const { setDataToEdit, deleteData } = useContext(CrudContext);
  let { name, constellation, id } = data;
  let history = useHistory();

  const handleEdit = () => {
    setDataToEdit(data);
    history.push(`/edit/${id}`);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={handleEdit}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
