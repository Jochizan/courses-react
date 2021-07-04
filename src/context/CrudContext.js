import { createContext, useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [db, setDB] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  let api = helpHttp();
  let url = 'http://localhost:5001/santos';

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await helpHttp()
        .get(url)
        .then((res) => {
          // console.log(res);
          if (!res.err) {
            setDB(res);
            setError(null);
          } else {
            setDB(null);
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
      headers: { 'content-type': 'application/json' }
    };

    api
      .post(url, options)
      .then((res) => {
        console.log(res);
        if (!res.err) {
          setDB([...db, res]);
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
      headers: { 'content-type': 'application/json' }
    };

    api
      .put(endpoint, options)
      .then((res) => {
        if (!res.err) {
          let newData = db.map((el) => (el.id === data.id ? data : el));
          setDB(newData);
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
        headers: { 'content-type': 'application/json' }
      };

      api
        .del(endpoint, options)
        .then((res) => {
          if (!res.err) {
            let newData = db.filter((el) => el.id !== id);
            setDB(newData);
          } else {
            setError(res);
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const data = { db, error, loading, dataToEdit, setDataToEdit, createData, updateData, deleteData };

  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export { CrudProvider };
export default CrudContext;