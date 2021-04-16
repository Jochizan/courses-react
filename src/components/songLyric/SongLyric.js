const SongLyric = ({ title, lyric }) => {
  return (
    <section>
      <h3>{title}</h3>
      <blockquote style={{ whiteSpace: 'pre-wrap' }}>{lyric}</blockquote>
    </section>
  );
};

export default SongLyric;
