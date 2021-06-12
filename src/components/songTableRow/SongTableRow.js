import { useHistory } from "react-router-dom";

const SongTableRow = ({ id, el, handleDeleteSong }) => {
  console.log(el);

  let history = useHistory();

  return (
    <tr>
      <td>
        <img src="https://placeimg.com/40/40/animals" alt="Foto de un animal" />
      </td>
      <td>Nombre del artista</td>
      <td>Nombre de la canción</td>
      <td>
        <button onClick={() => history.push(`/canciones/${id}`)}>Ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default SongTableRow;
