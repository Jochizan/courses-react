import { useState } from 'react';

const initialForm = {
  artist: '',
  song: ''
};

const SongForm = ({ handlerSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handlechange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert('Datos incompletos');
      return;
    }

    handlerSearch(form);
    setForm(initialForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='artist'
          placeholder='Nombre del Intérprete'
          onChange={handlechange}
          value={form.artist}
        />
        <input
          type='text'
          name='song'
          placeholder='Nombre de la Canción'
          onChange={handlechange}
          value={form.song}
        />
        <input type='submit' value='Enviar' />
      </form>
    </div>
  );
};

export default SongForm;
