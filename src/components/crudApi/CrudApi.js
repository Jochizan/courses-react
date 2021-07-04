import React, { useContext } from 'react';
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';
import CrudForm from '../crudApp/CrudForm';
import CrudTable from '../crudApp/CrudTable';
import Loader from '../loader/Loader';
import Error404 from '../Error';
import Message from '../Message';
import CrudContext from '../../context/CrudContext';

const CrudApi = () => {
  const { db, loading, error } = useContext(CrudContext);

  return (
    <div>
      <HashRouter basename='/santos'>
        <header>
          <h2>CRUD API con Rutas</h2>
          <nav>
            <NavLink to='/' activeClassName='active'>
              Santos
            </NavLink>
            <NavLink to='/agregar' activeClassName='active'>
              Santos
            </NavLink>
          </nav>
        </header>
        <Switch>
          <Route exact path='/'>
            <h2>Home de Santos</h2>
            {db && (
              <CrudTable />
            )}
          </Route>
          <Route exact path='/agregar'>
            <h2>Agregar Santos</h2>
            <CrudForm
            />
          </Route>
          <Route exact path='/edit/:id'>
            <h2>Editar Santo</h2>
            <CrudForm />
          </Route>
          <Route children={<Error404 />} />
        </Switch>
      </HashRouter>
      <article className='grid-1-2'>
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor='#dc3545'
          />
        )}
      </article>
    </div>
  );
};

export default CrudApi;
