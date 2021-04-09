import React, { useEffect, useState } from 'react';
import { helpHttp } from '../../helpers/helpHttp';
import CrudForm from '../crudApp/CrudForm';
import CrudTable from '../crudApp/CrudTable';
import Loader from '../loader/Loader';
import Message from '../Message';

const CrudApi = () => {
  const [db, setDB] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  let api = helpHttp();
  let url = 'http://localhost:5000/santos';

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

  return (
    <div>
      <h2>CRUD API</h2>
      <article className='grid-1-2'>
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor='#dc3545'
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};

export default CrudApi;
