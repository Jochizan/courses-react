import { useHistory } from 'react-router';

const CrudTableRow = ({ data, setDataToEdit, deleteData }) => {
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
