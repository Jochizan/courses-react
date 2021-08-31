import { useState, useEffect, useReducer } from 'react';

const initialState = {
  favorites: []
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
  };

  return (
    <div>
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}
      {characters.map((el, idx) => (
        <div className='item' key={idx}>
          <h2>{el.name}</h2>
          <button type='button' onClick={() => handleClick(el)}>
            Agregar a favoritos
          </button>
        </div>
      ))}
    </div>
  );
};

export default Characters;
