import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ExampleOne = () => {
  const {
    formState: { errors },
    handleSubmit,
    register
  } = useForm();

  const [entry, setEntry] = useState([]);

  const onSubmit = (data, e) => {
    setEntry([...entry, data]);
    e.target.reset();
  };

  return (
    <>
      <h1>Ejemplo 1</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Ingrese título'
          className='form-control my-2'
          {...register('title', {
            required: { value: true, message: 'Campo Obligatorio' },
            minLength: { value: 2, message: 'Mínimo de 2 letras' }
          })}
        />
        <span className='text-danger text-small d-block mb-2'>
          {errors?.title?.message}
        </span>
        <input
          type='text'
          placeholder='Ingrese descripción'
          className='form-control my-2'
          {...register('description', {
            required: { value: true, message: 'Campo Obligatorio' }
          })}
        />
        <span className='text-danger text-small d-block mb-2'>
          {errors?.description?.message}
        </span>
        <button className='btn btn-primary'>Agregar</button>
      </form>
      <ul>
        {entry.map((el, idx) => (
          <li key={idx}>
            {el.title} - {el.description}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ExampleOne;
