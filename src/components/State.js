import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    //Estos no son buenas practicas
    //setInterval(() => {
    //this.setState({
    //contador: this.state.contador + 1,
    //});
    //}, 1000);
  }

  render() {
    return (
      <div>
        <h2>El State</h2>
        <p>{this.state.contador}</p>
      </div>
    );
  }
}
