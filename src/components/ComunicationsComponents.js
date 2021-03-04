import React, { Component } from "react";

class Padre extends Component {
  state = {
    counter: 0,
  };

  increaseCounter = (e) => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <>
        <h2>Comunicación entre componentes</h2>
        <p>
          Contador <b>{this.state.counter}</b>
        </p>
        <Hijo message="Mensaje para el Hijo 1" />
        <Hijo
          increaseCounter={this.increaseCounter}
          message="Mensaje para el Hijo 2"
        />
      </>
    );
  }
}

const Hijo = ({ message, increaseCounter }) => {
  return (
    <>
      <h3>{message}</h3>
      <button onClick={increaseCounter}>Up</button>
    </>
  );
};

export default Padre;
