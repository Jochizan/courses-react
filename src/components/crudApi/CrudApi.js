import React, { useEffect, useState, useReducer } from "react";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
import { helpHttp } from "../../helpers/helpHttp";
import CrudForm from "../crudApp/CrudForm";
import CrudTable from "../crudApp/CrudTable";
import Loader from "../loader/Loader";
import Error404 from "../Error";
import Message from "../Message";
import { crudInitialState, crudReducer } from "../../reducers/crudReducer";
import { TYPES } from "../../actions/crudActions";

const CrudApi = () => {
  // const [db, setDB] = useState(null);
  const [state, dispatch] = useReducer(crudReducer, crudInitialState);
  const { db } = state;
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  let api = helpHttp();
  let url = "http://localhost:5001/santos";

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await helpHttp()
        .get(url)
        .then((res) => {
          // console.log(res);
          if (!res.err) {
            // setDB(res);
            dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
            setError(null);
          } else {
            // setDB(null);
            dispatch({ type: TYPES.NO_DATA });
            setError(res);
          }
        })
        .catch((err) => console.error(err));
      setLoading(false);
    };
    getData();
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();
    console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api
      .post(url, options)
      .then((res) => {
        console.log(res);
        if (!res.err) {
          // setDB([...db, res]);
          dispatch({ type: TYPES.CREATE_DATA, payload: res });
        } else {
          setError(res);
        }
      })
      .catch((err) => console.error(err));
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api
      .put(endpoint, options)
      .then((res) => {
        if (!res.err) {
          dispatch({ type: TYPES.UPDATE_DATA, payload: data });
          // setDB(newData);
        } else {
          setError(res);
        }
      })
      .catch((err) => console.error(err));
    // let newData = db.map((el) => (el.id === data.id ? data : el));
    // setDB(newData);
  };

  const deleteData = (id) => {
    let isDeleteData = window.confirm(
      `Estás seguro de eliminar el registro con el id '${id}'`
    );

    if (isDeleteData) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api
        .del(endpoint, options)
        .then((res) => {
          if (!res.err) {
            // let newData = db.filter((el) => el.id !== id);
            // setDB(newData);
            dispatch({ type: TYPES.DELETE_DATA, payload: id });
          } else {
            setError(res);
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      <HashRouter basename="/santos">
        <header>
          <h2>CRUD API con Rutas</h2>
          <nav>
            <NavLink to="/" activeClassName="active">
              Santos
            </NavLink>
            <NavLink to="/agregar" activeClassName="active">
              Agregar
            </NavLink>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <h2>Home de Santos</h2>
            {db && (
              <CrudTable
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            )}
          </Route>
          <Route exact path="/agregar">
            <h2>Agregar Santos</h2>
            <CrudForm
              createData={createData}
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
            />
          </Route>
          <Route exact path="/edit/:id">
            <h2>Editar Santo</h2>
            <CrudForm
              createData={createData}
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
            />
          </Route>
          <Route children={<Error404 />} />
        </Switch>
      </HashRouter>
      <article className="grid-1-2">
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
      </article>
    </div>
  );
};

export default CrudApi;
