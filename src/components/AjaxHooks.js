import React, { useState, useEffect } from "react";

const Pokemon = ({ avatar, name }) => {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption></figcaption>
    </figure>
  );
};

const AjaxHooks = () => {
  const [pokemons, setPokemons] = useState([]);
  const url = "https://pokeapi.co/api/v2/pokemon";

  //useEffect(() => {
  //const url = "https://pokeapi.co/api/v2/pokemon";
  //fetch(url)
  //.then((res) => res.json())
  //.then((json) => {
  ////console.log(json);
  //json.results.forEach((el) => {
  //fetch(el.url)
  //.then((res) => res.json())
  //.then((json) => {
  ////console.log(json);
  //let pokemon = {
  //id: json.id,
  //name: json.name,
  //avatar: json.sprites.front_default,
  //};
  //setPokemons((pokemons) => [...pokemons, pokemon]);
  //});
  //});
  //})
  //.catch()
  //.finally();
  //}, []);

  useEffect(() => {
    const getPokemons = async (url) => {
      const answer = await fetch(url);
      const json = await answer.json();

      json.results.forEach(async (el) => {
        const answer = await fetch(el.url);
        const json = await answer.json();
        const pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };
    getPokemons(url);
  }, []);

  return (
    <>
      <h2>Peticiones Asíncronas en Componentes de Clase</h2>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((el) => (
          <Pokemon avatar={el.avatar} name={el.name} key={el.id} />
        ))
      )}
    </>
  );
};

export default AjaxHooks;
