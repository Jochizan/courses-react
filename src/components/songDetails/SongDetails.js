import Message from '../Message';
import SongArtist from '../songArtist/SongArtist';
import SongLyric from '../songLyric/SongLyric';

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.error || lyric.err || lyric.name === 'AbortError' ? (
        <Message
          msg={`Error: No existe la canción "<em>${search.song}</em>"`}
          bgColor='#dc3545'
        />
      ) : (
        <SongLyric title={search.song} lyric={lyric.lyrics} />
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: No existe el intérprete "<em>${search.artist}</em>"`}
          bgColor='#dc3545'
        />
      )}
    </>
  );
};

export default SongDetails;
