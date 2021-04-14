import { useEffect, useState } from 'react';
import Loader from '../loader/Loader';
import SongDetails from '../songDetails/SongDetails';
import SongForm from '../songForm/SongForm';

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlerSearch = (data) => {
    // console.log(data);
    setSearch(data);
  };

  return (
    <div>
      <h2>Buscador de canciones</h2>
      {loading && <Loader />}
      <SongForm handlerSearch={handlerSearch} />
      <SongDetails search={search} lyric={lyric} bio={bio} />
    </div>
  );
};

export default SongSearch;
