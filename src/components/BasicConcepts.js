import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// screens
import Home from '../screens/Home';
import User from '../screens/User';
import Login from '../screens/Login';
import Acerca from '../screens/Acerca';
import Contacto from '../screens/Contacto';
import Error404 from '../screens/Error404';
import Productos from '../screens/Productos';
import Dashboard from '../screens/Dashboard';
import MenuConceptos from './MenuConceptos';
import ReactTopics from '../screens/ReactTopics';
import PrivateRoutes from './PrivateRoutes';

const BasicConcepts = () => {
  return (
    <div>
      <h2>Conceptos Básicos</h2>
      <Router>
        <MenuConceptos />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/acerca' component={Acerca} />
          <Route exact path='/contacto' component={Contacto} />
          <Route exact path='/usuario/:username' component={User} />
          <Route exact path='/productos' component={Productos} />
          <Route exact path='/about'>
            <Redirect to='/acerca' />
          </Route>
          <Route exact path='/contact'>
            <Redirect to='/contacto' />
          </Route>
          <Route path='/react' component={ReactTopics} />
          <Route exact path='/login' component={Login} />
          {/* <Route exact path='/dashboard' component={Dashboard} /> */}
          <PrivateRoutes exact path='/dashboard' component={Dashboard} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </div>
  );
  // return (
  //   <div>
  //     <Error404 />
  //     <h2>Conceptos Básicos</h2>
  //     <Router>
  //       <Switch>
  //         <Route exact path='/'>
  //           <h3>Home</h3>
  //           <p>Bienvenido al tema de las rutas en React.js</p>
  //         </Route>
  //         <Route exact path='/acerca'>
  //           <Acerca />
  //           <p>
  //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
  //             iure quam laboriosam obcaecati non, ad dolor facere voluptate
  //             voluptas sint quo odit ipsum ullam magni, eum quod ea asperiores?
  //             Eum?
  //           </p>
  //         </Route>
  //         {/* <Route exact path='/contacto' component={Contacto} /> */}
  //         <Route
  //           exact
  //           path='/contacto'
  //           children={
  //             <>
  //               <Contacto />
  //               <p>
  //                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  //                 Repellendus nihil repellat unde enim optio veritatis! Amet
  //                 placeat nobis qui eum suscipit, ut vel facere impedit harum
  //                 modi illo soluta iusto.
  //               </p>
  //             </>
  //           }
  //         />
  //       </Switch>
  //     </Router>
  //   </div>
  // );
};

export default BasicConcepts;
