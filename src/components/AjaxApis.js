import React, { Component } from "react";
//import PropTypes from "prop-types";
//import styles from "./AjaxApis.css";

const Pokemon = ({ avatar, name }) => {
  return (
    <figure>
      <img src={avatar} alt={name} srcSet="" />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount = () => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        //console.log(json);
        json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              //console.log(json);
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };
              let pokemons = [...this.state.pokemons, pokemon];
              this.setState({ pokemons });
            });
        });
      })
      .catch()
      .finally();
  };

  render() {
    return (
      <>
        <h2>Peticiones Asíncronas en Componentes de Clase</h2>
        {this.state.pokemons.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.pokemons.map((el) => (
            <Pokemon avatar={el.avatar} name={el.name} key={el.id} />
          ))
        )}
      </>
    );
  }
}

export default AjaxApis;
