import React, { useState } from 'react';

const CrudTableRow = ({ data }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.constellation}</td>
      <td>
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
