import React from "react";

import { useFetch } from "../hooks/useFetch";

const CustomHooks = () => {
  const url = "https://pokeapi.co/api/v2/pokemons/";

  const { data, isPending, error } = useFetch(url);

  return (
    <>
      <h2>Hooks Personalizados</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>
        <mark>{JSON.stringify(error)}</mark>
      </h3>
      <h3>
        <pre style={{whiteSpace: "pre-wrap"}}>
          <code>{JSON.stringify(data)}</code>
        </pre>
      </h3>
    </>
  );
};

export default CustomHooks;
