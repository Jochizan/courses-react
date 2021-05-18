import { Redirect, Route } from 'react-router-dom';

// const PrivateRoutes = (props) => {
// return <Route {...props} />;
// };

// Simular Autenticación
let auth;
auth = true;
auth = null;

const PrivateRoutes = ({ component: Component, ...rest }) => {
  return <Route {...rest}>{auth ? <Component/> : <Redirect to='/login' />}</Route>;
};

export default PrivateRoutes;
