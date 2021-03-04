import React, { Component } from "react";

class Reloj extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount = () => {
    console.log(3, "El componente ha sido eliminado del DOM");
  };

  render() {
    return <h3>{this.props.date}</h3>;
  }
}

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log(0, "El componente se inicializa, aún no esta en el DOM");

    this.state = {
      date: new Date().toLocaleTimeString(),
      visible: false,
    };
    this.temporizador = null;
  }

  componentDidMount = () => {
    console.log(1, "El componente ya se encuentre en el DOM");
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log(2, "El estado o las props del componente han cambiando");
    console.log(prevProps, prevState);
  };

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };

  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log(
      4,
      "El componente se dibuja (o redibuja por algun cambio) en el DOM"
    );
    return (
      <>
        <h2>Ciclo de Vida de los Componentes de Clase</h2>
        {this.state.visible && <Reloj date={this.state.date} />}
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </>
    );
  }
}

export default Lifecycle;
