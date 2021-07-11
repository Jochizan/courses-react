import { useReducer } from 'react';
import {
  accountantReducer,
  accountantInitialState,
  accountantInit,
} from '../reducers/contadorReducer';
import { TYPES } from '../actions/contadorActions';

const BestAccountant = () => {
  const [state, dispatch] = useReducer(
    accountantReducer,
    accountantInitialState,
    accountantInit
  );

  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });

  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Contador Reducer Mejorado</h2>
      <nav>
        <button onClick={restar5}>-5</button>
        <button onClick={restar}>-</button>
        <button onClick={reset}>0</button>
        <button onClick={sumar}>+</button>
        <button onClick={sumar5}>+5</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default BestAccountant;
