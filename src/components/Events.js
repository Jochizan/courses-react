import React, { Component } from "react";
//import PropTypes from "prop-types";

class EventsES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log("Sumando...");
    console.log(this);
    console.log(e);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    console.log("Restando...");
    console.log(this);
    console.log(e);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase vES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// Properties inicializer
class EventsES7 extends Component {
  state = {
    contador: 0,
  };

  // Arrow Functions
  sumar = (e) => {
    console.log("Sumando...");
    console.log(this);
    console.log(e);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    console.log("Restando...");
    console.log(this);
    console.log(e);
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase vES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

//function Boton(props) {
//return <button onClick={props.myOnClick}>Botón hecho componente</button>;
//}

const Boton = ({ myOnClick }) => {
  return <button onClick={myOnClick}>Botón hecho componente</button>;
};

class MoreEvents extends Component {
  handleClick = (e, message) => {
    console.log(e);
    console.log(e.target);
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.target);
    console.log(message);
  };

  render() {
    return (
      <div>
        <h2>Más sobre Eventos</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, "Hola pasando un parámetro desde un evento 1")
          }
        >
          Saludar
        </button>
        {/* Eventos Personalizados */}
        {/*<Boton
          onClick={(e) =>
            this.handleClick(e, "Hola pasando un parámetro desde un evento")
          }
        />*/}
        <Boton
          myOnClick={(e) =>
            this.handleClick(e, "Hola pasando un parámetro desde un evento 2")
          }
        />
      </div>
    );
  }
}

export { EventsES6, EventsES7, MoreEvents };
