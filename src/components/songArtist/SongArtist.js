import React from 'react';

const SongArtist = ({ artist }) => {
  return (
    <section>
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>
        Nacimiento: {artist.intBornYear} - {artist.intDeadYear || 'Presente'}
      </p>
      <p>Pais: {artist.strCountry}</p>
      <p>
        Genero: {artist.strGenre} - {artist.strStyle}
      </p>
      <p>
        Sitio Web:{' '}
        <a
          href={`http://${artist.strWebsite}`}
          target='_blank'
          rel='noreferrer'
        >
          Sitio Web Oficial
        </a>
      </p>
      <p>Biografía: {artist.strBiographyEN}</p>
    </section>
  );
};

export default SongArtist;
