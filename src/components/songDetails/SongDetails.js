import SongArtist from '../songArtist/SongArtist';
import SongLyric from '../songLyric/SongLyric';

const SongDetails = ({ search, lyric, bio }) => {
  return (
    <div>
      <h2>Detalles</h2>
      <SongArtist />
      <SongLyric />
    </div>
  );
};

export default SongDetails;
