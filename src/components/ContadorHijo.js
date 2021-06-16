import { memo, useMemo } from 'react';

const ContadorHijo = ({ contador, sumar, restar }) => {
  // let superNumber = 0;
  //
  // for (let i = 0; i < 100000000; i++) {
  //   superNumber++;
  // }
  const superNumber = useMemo(() => {
    let number = 0;

    for (let i = 0; i < 1000000000; i++) {
      number++;
    }

    return number;
  }, []);

  console.log('Hijo Contador se renderiza');

  return (
    <div style={{ border: 'thin solid #000', margin: '1rem', padding: '1rem' }}>
      <h2>Hijo de contador</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{superNumber}</h3>
    </div>
  );
};

export default memo(ContadorHijo);
