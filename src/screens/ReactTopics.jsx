import {
  Route,
  Switch,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom';

const Topic = () => {
  let { topic } = useParams();
  console.log(topic)

  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae sunt
        nihil fugiat odio nobis iusto incidunt ab sint beatae, ducimus eaque,
        laudantium quia velit corrupti minima sed impedit consequatur. Sed.
      </p>
    </div>
  );
};

const ReactTopics = () => {
  // let match = useRouteMatch();
  // console.log(match)
  // "path" nos permite construir rutas relativas <Route>, mientras que "url" nos permite
  // construir enlaces relativos <Link> o <NavLink>
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>React</h2>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
          <Link to={`${url}/componentes`}>Componentes</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h4>Elige un tema de React</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium fugit cum voluptate vel recusandae nobis itaque tempora
            adipisci ullam! Deserunt vitae itaque laudantium, doloremque aliquid
            sequi sit mollitia. Eos, est.
          </p>
        </Route>
        <Route path={`${path}/:topic`} component={Topic}></Route>
      </Switch>
    </div>
  );
};

export default ReactTopics;
