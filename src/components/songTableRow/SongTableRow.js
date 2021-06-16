import { useHistory } from 'react-router-dom';

const SongTableRow = ({ id, el, handleDeleteSong }) => {
  let { bio, search } = el;
  let avatar = bio.artists[0].strArtistThumb;
  let history = useHistory();
  let avatarStyle = {
    width: 'auto',
    height: '40px'
  };

  // console.log(el);

  return (
    <tr>
      <td>
        <img style={avatarStyle} src={avatar} alt={search.artist} />
      </td>
      <td>{search.artist}</td>
      <td>{search.song}</td>
      <td>
        <button onClick={() => history.push(`/${id}`)}>Ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default SongTableRow;
