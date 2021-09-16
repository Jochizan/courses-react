import { HashRouter as Router, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Tareas from './components/Tareas';
import Guardar from './components/Tareas/Save';
import Usuarios from './components/Usuarios';
import Publicaciones from './components/Publications';

const App = () => (
  <Router>
    <Menu />
    <div id='margen'>
      <Route exact path='/' component={Usuarios} />
      <Route exact path='/tareas' component={Tareas} />
      <Route exact path='/publicaciones/:key' component={Publicaciones} />
      <Route exact path='/tareas/guardar' component={Guardar} />
      <Route exact path='/tareas/guardar/:usr_id/:task_id' component={Guardar} />
    </div>
  </Router>
);

export default App;
