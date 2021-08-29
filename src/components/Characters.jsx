import { useState, useEffect } from 'react';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div>
      {characters.map((el, idx) => (
        <h2 key={idx}>{el.name}</h2>
      ))}
    </div>
  );
};

export default Characters;
