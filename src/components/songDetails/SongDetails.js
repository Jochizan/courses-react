import Message from '../Message';
import SongArtist from '../songArtist/SongArtist';
import SongLyric from '../songLyric/SongLyric';

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.error || lyric.err || lyric.name === 'AbortError' ? (
        <Message
          msg={`Error: No existe la canción "${search.song}"`}
          bgColor='#dc3545'
        />
      ) : (
        <SongLyric />
      )}
      {bio.artists ? (
        <SongArtist />
      ) : (
        <Message
          msg={`Error: No existe el intérprete "${search.artist}"`}
          bgColor='#dc3545'
        />
      )}
    </>
  );
};

export default SongDetails;
