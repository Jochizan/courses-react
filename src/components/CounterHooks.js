import React, { useState } from "react";
//import PropTypes from 'prop-types';
//import styles from './CounterHooks.css';

const CounterHooks = (props) => {
  const [counter, setCounter] = useState(0);
  //console.log(useState());

  const sumar = () => setCounter(counter + 1);
  const restar = () => setCounter(counter - 1);

  return (
    <>
      <h2>Hooks - useState</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <p>Contador de {props.title}</p>
      <h3>{counter}</h3>
    </>
  );
};

CounterHooks.defaultProps = {
  title: "Clicks",
};

export default CounterHooks;
