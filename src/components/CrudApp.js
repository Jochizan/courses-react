import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDB = [
  {
    id: 1,
    name: 'Seiya',
    constellation: 'Pegaso'
  },
  {
    id: 2,
    name: 'Shiryu',
    constellation: 'Dragón'
  },
  {
    id: 3,
    name: 'Hyoga',
    constellation: 'Cisne'
  },
  {
    id: 4,
    name: 'Shun',
    constellation: 'Andrómeda'
  },
  {
    id: 5,
    name: 'Ikki',
    constellation: 'Fénix'
  }
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDB);

  return (
    <div>
      <h2>CRUD APP</h2>
      <CrudForm />
      <CrudTable data={db} />
    </div>
  );
};

export default CrudApp;
