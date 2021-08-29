import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Usuarios from './components/Usuarios';

const Prueba = () => <div>hola</div>

const App = (props) => (
	<BrowserRouter>
		<Menu />
		<div id="margen">
			<Route exact path='/' component={Usuarios} />
			<Route exact path='/tareas' component={Prueba} />
		</div>
	</BrowserRouter>
);

export default App;