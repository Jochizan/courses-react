import SongTableRow from "../songTableRow/SongTableRow";

const SongTable = ({ mySongs, handleDeleteSong }) => {
  return (
    <div>
      <h3>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Artista</th>
              <th>Canción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {mySongs.length > 0 ? (
              mySongs.map((el, idx) => (
                <SongTableRow
                  handleDeleteSong={handleDeleteSong}
                  key={idx}
                  el={el}
                  id={idx}
                />
              ))
            ) : (
              <tr>
                <td colSpan="4">Sin canciones</td>
              </tr>
            )}
          </tbody>
        </table>
      </h3>
    </div>
  );
};

export default SongTable;
