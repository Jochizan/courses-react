import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Usuarios from './components/Usuarios';
import Publicaciones from './components/Publications';

const Prueba = () => <div>hola</div>;

const App = () => (
  <BrowserRouter>
    <Menu />
    <div id='margen'>
      <Route exact path='/' component={Usuarios} />
      <Route exact path='/tareas' component={Prueba} />
      <Route exact path='/publicaciones/:key' component={Publicaciones} />
    </div>
  </BrowserRouter>
);

export default App;
