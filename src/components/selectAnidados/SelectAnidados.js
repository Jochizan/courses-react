import { useState } from 'react';
import SelectList from '../selectList/SelectList';

const SelectAnidados = () => {
  const [state, setState] = useState('');
  const [town, setTown] = useState('');
  const [suburb, setSuburb] = useState('');

  const TOKEN = '1c02e82e-effa-41c9-9c68-c4ca1357f579';

  return (
    <div>
      <h2>Select Anidados</h2>
      <h3>México</h3>
      <SelectList
        title='estado'
        url={`https://api-sepomex.hckdrk.mx/query/get_estados?token=${TOKEN}`}
        handleChange={(e) => setState(e.target.value)}
      />
      {state && (
        <SelectList
          title='municipios'
          url={`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
          handleChange={(e) => setTown(e.target.value)}
        />
      )}
      {town && (
        <SelectList
          title='colonia'
          url={`https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
          handleChange={(e) => setSuburb(e.target.value)}
        />
      )}
      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectAnidados;
