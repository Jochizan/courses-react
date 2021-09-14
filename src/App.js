import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Tareas from './components/Tareas';
import Usuarios from './components/Usuarios';
import Publicaciones from './components/Publications';

const App = () => (
  <BrowserRouter>
    <Menu />
    <div id='margen'>
      <Route exact path='/' component={Usuarios} />
      <Route exact path='/tareas' component={Tareas} />
      <Route exact path='/publicaciones/:key' component={Publicaciones} />
    </div>
  </BrowserRouter>
);

export default App;
