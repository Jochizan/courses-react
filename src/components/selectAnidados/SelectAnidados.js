import { useState } from 'react';
import SelectList from '../selectList/SelectList';

const SelectAnidados = () => {
  const [state, setState] = useState('');
  const [town, setTown] = useState('');
  const [suburb, setSuburb] = useState('');

  return (
    <div>
      <h2>Select Anidados</h2>
      <h3>México</h3>
      <SelectList
        title='estados'
        url=''
        handleChange={(e) => setState(e.target.value)}
      />
      {state && (
        <SelectList
          title='municipios'
          url=''
          handleChange={(e) => setTown(e.target.value)}
        />
      )}
      {town && (
        <SelectList
          title='colonias'
          url=''
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
