import React, { useEffect, useState } from 'react';
import { helpHttp } from '../../helpers/helpHttp';
import CrudForm from '../crudApp/CrudForm';
import CrudTable from '../crudApp/CrudTable';

const CrudApi = () => {
  const [db, setDB] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  let api = helpHttp();
  let url = 'http://localhost:5000/santos';

  useEffect(() => {
    api
      .get(url)
      .then((res) => {
        // console.log(res);
        if (!res.err) {
          setDB(res);
        } else {
          setDB(null);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const createData = (data) => {
    data.id = Date.now();
    console.log(data);
    setDB([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDB(newData);
  };

  const deleteData = (id) => {
    let isDeleteData = window.confirm(
      `Estás seguro de eliminar el registro con el id '${id}'`
    );

    if (isDeleteData) {
      let newData = db.filter((el) => el.id !== id);
      setDB(newData);
    } else {
      return;
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
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApi;
