import React from 'react';

import './Styles.css';
import './Styles.scss';
import moduleStyles from './Styles.module.css';

const Styles = () => {
  let myStyles = {
    borderRadius: '.5rem',
    margin: '2rem auto',
    maxWidth: '50%',
  };

  return (
    <section className='styles'>
      <h2>Estilos CSS en React</h2>
      <h3 className='bg-react'>Estilos en hoja css externa</h3>
      <h3
        className='bg-react'
        style={{ borderRadius: '.25rem', margin: '1rem' }}
      >
        Estilos en línea (atributo style)
      </h3>
      <h3 className='bg-react' style={myStyles}>
        Estilos en línea
      </h3>
      <h3 className='bg-react'>
        Agregando Normalize con <br />
        <code>@import-normalize;</code>
      </h3>
      <h3 className={moduleStyles.error}>Estilos con módulos</h3>
      <h3 className={moduleStyles.success}>Estilos con módulos</h3>
      <h3 className='bg-sass'>Estilos con SASS</h3>
    </section>
  );
};

export default Styles;
