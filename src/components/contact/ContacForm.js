import { useForm } from '../../hooks/useForm';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  comments: ''
};

const validateForm = (form) => {
  let errors = {};

  if (!form.name.trim('')) errors.name = 'El campo nombre es requerido';
  if (!form.email.trim('')) errors.email = 'El campo email es requerido';
  if (!form.subject.trim('')) errors.subject = 'El campo subject es requerido';
  if (!form.comments.trim(''))
    errors.comments = 'El campo comments es requerido';

  return errors;
};

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

  const style = {
    fontWeight: 'bold',
    color: '#dc3545'
  };

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
        {errors.name && <p style={style}>{errors.name}</p>}
        <input
          type='email'
          name='email'
          value={form.email}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder='Escribe tu email'
          required
        />
        {errors.email && <p style={style}>{errors.email}</p>}
        <input
          type='text'
          name='subject'
          value={form.subject}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder='Asunto a tratar'
          required
        />
        {errors.subject && <p style={style}>{errors.subject}</p>}
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
        {errors.comments && <p style={style}>{errors.comments}</p>}
        <input type='submit' value='Enviar' />
      </form>
    </div>
  );
};

export default ContacForm;
