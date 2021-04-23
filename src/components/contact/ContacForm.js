import { useForm } from '../../hooks/useForm';

const initialForm = {};

const validateForm = (form) => {};

const ContacForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleBlur,
    handleSubmit,
    handleChange
  } = useForm(initialForm, validateForm);

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          value={form.name}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder='Escribe tu nombre'
          required
        />
        <input
          type='email'
          name='email'
          value={form.email}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder='Escribe tu email'
          required
        />
        <input
          type='text'
          name='subject'
          value={form.subject}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder='Asunto a tratar'
          required
        />
        <textarea
          name='comments'
          cols='50'
          rows='5'
          value={form.comments}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder='Escribe tus comentarios'
          required
        ></textarea>
        <input type='submit' value='Enviar' />
      </form>
    </div>
  );
};

export default ContacForm;
